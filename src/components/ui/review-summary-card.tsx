"use client";

import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { motion, animate, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// Define the props for the component
export interface ReviewSummaryCardProps {
  /** The average rating value. */
  rating: number;
  /** The total number of reviews. */
  reviewCount: number;
  /** The maximum possible rating, used to render stars. */
  maxRating?: number;
  /** A descriptive summary text line. */
  summaryText: string;
  /** Optional class name for custom styling. */
  className?: string;
}

/**
 * A responsive and theme-adaptive card to display an animated rating summary.
 * Powered by 21st.dev UI components.
 */
export const ReviewSummaryCard: React.FC<ReviewSummaryCardProps> = ({
  rating,
  reviewCount,
  maxRating = 5,
  summaryText,
  className,
}) => {
  // Refs to animate the numbers
  const ratingRef = useRef<HTMLSpanElement>(null);
  const reviewCountRef = useRef<HTMLSpanElement>(null);

  // Effect to trigger the count-up animations on mount
  useEffect(() => {
    const ratingControl = animate(0, rating, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(value) {
        if (ratingRef.current) {
          ratingRef.current.textContent = value.toFixed(1);
        }
      },
    });

    const reviewCountControl = animate(0, reviewCount, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(value) {
        if (reviewCountRef.current) {
          // Format with commas for better readability
          reviewCountRef.current.textContent = new Intl.NumberFormat("en-US").format(
            Math.round(value)
          );
        }
      },
    });

    // Cleanup animations on unmount
    return () => {
      ratingControl.stop();
      reviewCountControl.stop();
    };
  }, [rating, reviewCount]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" as const
      } 
    },
  };

  const starVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.1, // Staggered delay for each star
        duration: 0.4,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <motion.div
      className={cn(
        "w-full rounded-2xl border border-white/10 bg-[#161722] hover:border-[#0084ff]/50 p-5 sm:p-6 text-center shadow-sm",
        "flex flex-col items-center justify-center transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,132,255,0.2)]",
        className
      )}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      aria-label={`Rating: ${rating} out of ${maxRating} based on ${reviewCount} reviews.`}
    >
      {/* Star Rating Display */}
      <div className="flex items-center gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <motion.div key={i} custom={i} variants={starVariants}>
            <Star
              className={cn(
                "h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-110",
                rating >= i + 1 ? "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" : "text-gray-600"
              )}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      {/* Animated Rating and Review Count */}
      <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
        <span ref={ratingRef}>0.0</span>
        <span className="text-xl sm:text-2xl font-semibold text-gray-300">
          {" "}(<span ref={reviewCountRef}>0</span> Reviews)
        </span>
      </h2>

      {/* Summary Text */}
      <p className="mt-2 text-xs sm:text-sm font-medium text-gray-400">{summaryText}</p>
    </motion.div>
  );
};
