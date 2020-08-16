type Props = { width: number | string };

export default function TicketMono({ width }: Props) {
  return (
    <svg width={width} viewBox="0 0 770 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <g style={{ mixBlendMode: 'luminosity' }}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M80 30C68.9543 30 60 38.9543 60 50V168C60 168 60.0001 168 60.0001 168C74.9118 168 87.0001 180.088 87.0001 195C87.0001 209.912 74.9118 222 60.0001 222C60.0001 222 60 222 60 222V340C60 351.046 68.9543 360 80 360H690C701.046 360 710 351.046 710 340L710 222C695.088 222 683 209.912 683 195C683 180.088 695.088 168 710 168L710 50C710 38.9543 701.046 30 690 30H80Z"
            fill="#252729"
          />
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
      </defs>
    </svg>
  );
}
