import { HandwritingText } from "@/components/ui/handwriting-text";

export default function HandwritingDemo() {
  return (
    <div className="flex min-h-[200px] w-full flex-col items-center justify-center gap-6 px-6">
      <h2 className="max-w-2xl text-center text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
        Building software that is{" "}
        <HandwritingText
          words={["scalable.", "fast.", "reliable.", "creative."]}
          className="text-[#00d2ff]"
          height="1.2em"
        />
      </h2>
    </div>
  );
}
