export default function SectionTitle({ number, title, subtitle, className = '' }) {
  return (
    <div className={`mb-12 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[#48E6C1] text-base sm:text-lg font-semibold tracking-wider">
          {number}.
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F1F5F9] tracking-tight font-heading">
          {title}
        </h2>
        <div className="flex-1 max-w-xs h-[1px] bg-gradient-to-r from-[#48E6C1]/40 to-transparent ml-2" />
      </div>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-[#94A3B8] max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
