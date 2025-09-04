/**
 * BrandBadge
 * Reusable gradient rounded-square with the dark "O" ring mark.
 * Matches the navbar and footer badge styling from the reference.
 */
export function BrandBadge({ size = 44, className = "" }: { size?: number; className?: string }) {
  const radius = 14
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-sm`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#ECE8C8] to-[#CFC99D]" />
      <svg className="relative z-10 block" viewBox="0 0 44 44" width={size} height={size}>
        <rect x="2" y="2" width="40" height="40" rx={radius} fill="transparent" />
        <circle cx="22" cy="22" r="9.5" fill="none" stroke="#0e0f0f" strokeWidth="6.5" />
      </svg>
    </div>
  )
}
