type Props = { width: number | string };

export default function TicketColored({ width }: Props) {
  return (
    <svg width={width} viewBox="0 0 770 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="60"
          y="30"
          width="650"
          height="330"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M80 30C68.9543 30 60 38.9543 60 50V168C74.9117 168 87 180.088 87 195C87 209.912 74.9117 222 60 222V340C60 351.046 68.9543 360 80 360H690C701.046 360 710 351.046 710 340V222C695.088 222 683 209.912 683 195C683 180.088 695.088 168 710 168V50C710 38.9543 701.046 30 690 30H80Z"
            fill="#252729"
          />
        </mask>
        <g mask="url(#mask0)">
          <g filter="url(#filter1_f)">
            <ellipse cx="548.322" cy="195" rx="217.333" ry="220" fill="url(#paint0_linear)" />
          </g>
          <g filter="url(#filter2_f)">
            <ellipse cx="421.873" cy="195" rx="217.333" ry="220" fill="url(#paint1_linear)" />
          </g>
          <g filter="url(#filter3_f)">
            <ellipse cx="221.333" cy="195" rx="217.333" ry="220" fill="url(#paint2_linear)" />
          </g>
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M81 35C72.1634 35 65 42.1634 65 51V163.388C80.2981 165.789 92 179.028 92 195C92 210.972 80.2981 224.211 65 226.612V339C65 347.837 72.1634 355 81 355H689C697.837 355 705 347.837 705 339V226.612C689.702 224.211 678 210.972 678 195C678 179.028 689.702 165.789 705 163.388V51C705 42.1634 697.837 35 689 35H81Z"
          fill="#252729"
        />
        <path opacity="0.3" d="M572 35V356" stroke="#8A8F98" strokeDasharray="6 6" />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="770"
          height="450"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="30" />
          <feGaussianBlur stdDeviation="30" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="filter1_f"
          x="276.746"
          y="-79.2424"
          width="543.152"
          height="548.485"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="27.1212" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="filter2_f"
          x="150.298"
          y="-79.2424"
          width="543.152"
          height="548.485"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="27.1212" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="filter3_f"
          x="-50.2424"
          y="-79.2424"
          width="543.152"
          height="548.485"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="27.1212" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="765.655"
          y1="195"
          x2="330.988"
          y2="195"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#53A0EC" />
          <stop offset="1" stopColor="#57C84F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="204.54"
          y1="195"
          x2="639.207"
          y2="195"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFBC29" />
          <stop offset="1" stopColor="#EADF58" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="4"
          y1="195"
          x2="438.667"
          y2="195"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC6193" />
          <stop offset="1" stopColor="#EC4B31" />
        </linearGradient>
      </defs>
    </svg>
  );
}
