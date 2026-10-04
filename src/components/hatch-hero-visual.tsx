export function HatchHeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-90 max-lg:opacity-70"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMaxYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="yolkGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(980 390) rotate(90) scale(220 220)">
            <stop stopColor="#EF9F27" stopOpacity="0.85" />
            <stop offset="0.55" stopColor="#EF9F27" stopOpacity="0.25" />
            <stop offset="1" stopColor="#EF9F27" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="shellGrad" x1="860" y1="220" x2="1120" y2="620" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#D7EBE1" />
          </linearGradient>
          <linearGradient id="padGrad" x1="700" y1="620" x2="1220" y2="780" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1F6F78" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#1F6F78" stopOpacity="0.45" />
            <stop offset="1" stopColor="#1F6F78" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Launch pad plane */}
        <ellipse
          className="animate-pad"
          cx="960"
          cy="700"
          rx="340"
          ry="48"
          fill="url(#padGrad)"
        />
        <ellipse
          cx="960"
          cy="700"
          rx="220"
          ry="18"
          stroke="#1F6F78"
          strokeOpacity="0.35"
          strokeWidth="2"
        />

        {/* Shell halves */}
        <g className="animate-yolk" style={{ transformOrigin: "960px 430px" }}>
          <path
            d="M860 430 C860 300 910 220 980 220 C1050 220 1100 300 1100 430 C1100 470 1085 500 1060 520 L980 470 L900 520 C875 500 860 470 860 430 Z"
            fill="url(#shellGrad)"
            stroke="#14201C"
            strokeOpacity="0.18"
            strokeWidth="3"
          />
          <ellipse cx="980" cy="400" rx="58" ry="62" fill="url(#yolkGlow)" />
          <circle cx="980" cy="400" r="34" fill="#EF9F27" />
          <circle cx="968" cy="388" r="8" fill="#FFF4D8" fillOpacity="0.7" />

          {/* Crack lines */}
          <path
            className="animate-crack"
            d="M930 310 L960 360 L940 400 L975 455"
            stroke="#14201C"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="animate-crack"
            style={{ animationDelay: "0.2s" }}
            d="M1035 295 L1005 350 L1025 395 L990 450"
            stroke="#14201C"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Tiny emerging ticker chip — visual anchor, not an overlay badge */}
          <rect
            x="952"
            y="348"
            width="56"
            height="22"
            rx="4"
            fill="#14201C"
          />
          <text
            x="980"
            y="363"
            textAnchor="middle"
            fill="#F7FBF8"
            fontSize="11"
            fontFamily="var(--font-display), sans-serif"
            fontWeight="700"
          >
            $HATCH
          </text>
        </g>

        {/* Soft shell fragments */}
        <path
          d="M820 480 C800 450 790 420 805 400 C830 430 845 455 850 490 Z"
          fill="#E8F2EC"
          stroke="#14201C"
          strokeOpacity="0.12"
          strokeWidth="2"
        />
        <path
          d="M1125 470 C1155 445 1175 415 1160 390 C1130 420 1110 450 1105 485 Z"
          fill="#E8F2EC"
          stroke="#14201C"
          strokeOpacity="0.12"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
