export default function Notification({ children, isFixed, mobileWidth }) {
  return (
    <div className="notification">
      {children}
      <style jsx>{`
        .notification {
          min-height: 2.5rem;
          padding: 0.375rem 1rem;
          margin: ${isFixed ? '1rem 1rem 2rem' : '1.5rem 0 0'};
          border: 1px solid #d8d8d8;
          border-radius: 5px;
        }
        @media screen and (max-width: ${mobileWidth || '950px'}) {
          .notification {
            margin-top: 0;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
