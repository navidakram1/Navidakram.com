'use client';

import React, { useState } from 'react';
import { useRoster } from '../../context/RosterContext';
import { downloadIcsFile, generateGoogleCalendarUrl } from '../../lib/calendarExport';
import {
  Calendar,
  Download,
  Copy,
  Check,
  ExternalLink,
  X,
  User,
  Users,
  CalendarRange,
  FileCheck,
  CheckCircle2,
  Share2,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DownloadDoneIcon, CopiedIcon } from '../ui/animated-state-icons';

interface CalendarExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarExportModal: React.FC<CalendarExportModalProps> = ({ isOpen, onClose }) => {
  const { roster, currentBusiness, staffList, activeStaffId, activeRole } = useRoster();

  const [exportFilter, setExportFilter] = useState<'all' | 'mine' | string>('all');
  const [includeNotes, setIncludeNotes] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  // Filter shifts based on selection
  const selectedStaffId = exportFilter === 'all' 
    ? undefined 
    : exportFilter === 'mine' 
      ? activeStaffId 
      : exportFilter;

  const filteredShifts = selectedStaffId
    ? roster.shifts.filter(s => s.assignedStaffIds.includes(selectedStaffId))
    : roster.shifts;

  const targetStaff = staffList.find(s => s.id === selectedStaffId);

  // Generate webcal feed url mock
  const webcalUrl = `webcal://${typeof window !== 'undefined' ? window.location.host : 'rosterflow.app'}/api/calendar/${currentBusiness.slug || 'business'}/${roster.id}.ics?staffId=${selectedStaffId || 'all'}`;

  const handleDownload = () => {
    try {
      const filename = selectedStaffId
        ? `${currentBusiness.slug || 'roster'}-${targetStaff?.name.toLowerCase().replace(/\s+/g, '-') || 'staff'}-${roster.weekStart}.ics`
        : `${currentBusiness.slug || 'roster'}-all-shifts-${roster.weekStart}.ics`;

      downloadIcsFile({
        roster,
        business: currentBusiness,
        staffList,
        filterStaffId: selectedStaffId,
        includeNotes
      }, filename);

      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch (err) {
      console.error('Export download error:', err);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(webcalUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const firstShift = filteredShifts[0];
  const gcalUrl = firstShift 
    ? generateGoogleCalendarUrl(firstShift, currentBusiness, staffList) 
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-gradient-to-r from-blue-50/50 to-white">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Export Shift Calendar</h2>
              <p className="text-xs text-slate-500">Sync with Apple Calendar, Google Calendar, Outlook</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-5 overflow-y-auto">
          {/* Target Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Select Shifts to Export
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setExportFilter('all')}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all ${
                  exportFilter === 'all'
                    ? 'border-blue-600 bg-blue-50/80 text-blue-700 ring-2 ring-blue-600/20 shadow-2xs'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Users className="h-4 w-4" />
                <span>Entire Team ({roster.shifts.length} shifts)</span>
              </button>

              <button
                type="button"
                onClick={() => setExportFilter('mine')}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all ${
                  exportFilter === 'mine'
                    ? 'border-blue-600 bg-blue-50/80 text-blue-700 ring-2 ring-blue-600/20 shadow-2xs'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <User className="h-4 w-4" />
                <span>My Shifts Only</span>
              </button>
            </div>

            {/* Individual Staff Dropdown */}
            {activeRole === 'owner' && (
              <div className="pt-1">
                <select
                  value={exportFilter}
                  onChange={(e) => setExportFilter(e.target.value)}
                  className="w-full text-xs font-medium rounded-xl border border-slate-200 bg-slate-50/60 p-2.5 text-slate-700 focus:border-blue-500 focus:bg-white focus:outline-hidden"
                >
                  <option value="all">Export All Staff Shifts</option>
                  <option value="mine">Export Active User Shifts</option>
                  <optgroup label="Export Specific Team Member:">
                    {staffList.map((st) => (
                      <option key={st.id} value={st.id}>
                        {st.name} ({st.jobTitle})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>
            )}
          </div>

          {/* Export Options */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 space-y-2">
            <div className="text-xs font-bold text-slate-700">Calendar Options</div>
            <label className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer">
              <input
                type="checkbox"
                checked={includeNotes}
                onChange={(e) => setIncludeNotes(e.target.checked)}
                className="rounded-md border-slate-300 text-blue-600 focus:ring-blue-500 h-4 w-4"
              />
              <span>Include shift notes & workplace hourly rates in event descriptions</span>
            </label>
            <div className="text-[11px] text-slate-500 pt-1">
              • Timezone: <span className="font-semibold text-slate-700">{currentBusiness.timezone}</span>
              <br />
              • Location: <span className="font-semibold text-slate-700">{currentBusiness.address}</span>
            </div>
          </div>

          {/* Summary Preview Box */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-blue-50/60 border border-blue-100">
            <div>
              <div className="text-xs font-bold text-blue-900">
                {filteredShifts.length} {filteredShifts.length === 1 ? 'Shift' : 'Shifts'} Ready to Export
              </div>
              <div className="text-[11px] text-blue-700">
                Schedule period: Week of Oct 5 – Oct 11, 2026
              </div>
            </div>
            <FileCheck className="h-6 w-6 text-blue-600" />
          </div>

          {/* Export Actions */}
          <div className="space-y-2.5 pt-1">
            {/* 1. Direct iCalendar .ics File Download */}
            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 py-3 text-xs font-bold text-white shadow-sm transition-all group"
            >
              <DownloadDoneIcon size={18} color="white" />
              <span>Download iCalendar (.ics) File</span>
            </button>

            {/* 2. Direct Google Calendar Event link */}
            {gcalUrl && (
              <a
                href={gcalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 py-2.5 text-xs font-semibold text-slate-700 transition-colors"
              >
                <ExternalLink className="h-4 w-4 text-blue-600" />
                <span>Add First Shift to Google Calendar</span>
              </a>
            )}

            {/* 3. Subscription Feed URL */}
            <div className="pt-2">
              <label className="text-[11px] font-bold text-slate-500 block mb-1">
                Calendar Subscription Link (Webcal)
              </label>
              <div className="flex items-center gap-1.5">
                <input
                  type="text"
                  readOnly
                  value={webcalUrl}
                  className="flex-1 text-[11px] font-mono text-slate-600 bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1.5 truncate"
                />
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors shadow-2xs"
                >
                  <CopiedIcon size={16} active={copiedLink} color={copiedLink ? '#059669' : '#475569'} />
                  <span className={copiedLink ? 'text-emerald-700 font-bold' : ''}>
                    {copiedLink ? 'Copied!' : 'Copy'}
                  </span>
                </button>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                Paste into Apple Calendar (File &gt; New Calendar Subscription) or Google Calendar (Other calendars &gt; From URL).
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 bg-slate-50 px-6 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shadow-2xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
