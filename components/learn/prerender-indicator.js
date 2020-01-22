const PrerenderIndicator = ({ height = 20 }) => (
  <>
    <svg height={height} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 3L30.74 41H8L36 3Z" fill="black" />
      <path d="M25 77L30.26 39H53L25 77Z" fill="black" />
      <path d="M13.5 33.5L53 39L47.5 46.5L7 41.25L13.5 33.5Z" fill="black" />
    </svg>
    <style jsx>{`
      svg {
        vertical-align: middle;
        transform: translateY(-10%);
      }
    `}</style>
  </>
);

export default PrerenderIndicator;
