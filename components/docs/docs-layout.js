export default function DocsLayout({ children }) {
  return (
    <div className="docs">
      {children}
      <style jsx>{`
        .docs {
          width: 100%;
          max-width: calc(100% - 300px); /* Exclude size of the sidebar */
          margin-left: calc(300px + 1rem); /* Fixed sidebar width + margin */
        }
        @media screen and (max-width: 950px) {
          .docs {
            max-width: 100%;
            margin: 0;
          }
        }
        hr {
          margin-top: 3rem;
        }
        footer {
          display: flex;
          font-size: 0.875rem;
          justify-content: flex-end;
          border-top: 1px solid #f3f3f3;
          margin-top: 2.5rem;
          padding: 1.5rem 0;
        }
      `}</style>
      <style jsx global>{`
        /* Headings */
        .docs h1 {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: -0.066875rem;
        }
        .docs h2 {
          font-size: 2rem;
        }
        .docs h3 {
          font-size: 1.5rem;
        }
        .docs h4 {
          font-size: 1.2rem;
        }
        .docs h5 {
          font-size: 1rem;
        }
        .docs .heading {
          margin: 3.5rem 0 2rem 0;
          font-weight: 600;
        }
        .docs .heading > span[id] {
          display: block;
          position: absolute;
          visibility: hidden;
          margin-top: -128px;
          padding-top: 128px;
        }
        .docs .heading > a {
          color: inherit;
        }
        .docs .heading > a:hover {
          color: inherit;
          border-bottom: 1px dotted;
        }
        .docs .heading > a:hover ~ .permalink {
          visibility: visible;
        }
        .docs .heading > .permalink {
          visibility: hidden;
          display: none;
        }

        @media (min-width: 992px) {
          .docs .heading > a {
            margin-right: 0.5rem;
          }
          .docs .heading > .permalink {
            display: inline-block;
          }
        }

        .docs p {
          margin: 1.25rem 0;
        }

        /* Inline code */
        .docs code.inline {
          color: rgb(212, 0, 255);
          font-size: 0.9em;
          white-space: pre-wrap;
          transition: color 0.2s ease;
        }

        /* Code */
        .docs pre {
          background: #1d1f21;
          color: #f8f8f2;
          white-space: pre;
          overflow: auto;
          padding: 1.5rem;
          margin: 1.5rem 0;
          border-radius: 3px;
          -webkit-overflow-scrolling: touch;
        }
        .docs pre > code {
          font-size: 14px;
          line-height: 20px;
        }

        /* Links */
        .docs a.absolute > code.inline {
          color: #0074de;
        }
        .docs a.absolute:hover > code.inline {
          color: #68b5fb;
        }
        .docs a.relative {
          color: inherit;
          font-size: inherit;
          border-bottom: 1px dotted;
        }
        .docs a.relative:hover {
          color: gray;
          text-decoration: none;
        }
        .docs a.relative:hover > code.inline {
          color: gray;
        }

        /* details */
        .docs details {
          margin: 1.5rem 0;
          padding: 0.5rem 1rem;
          background: #fafafa;
          border: 1px solid #eaeaea;
          border-radius: 3px;
        }
        .docs details[open] {
          overflow: hidden;
        }
        .docs details > summary {
          font-weight: 500;
          outline: none;
          cursor: pointer;
        }

        /* Quotes */
        .docs blockquote {
          color: #666666;
          background: #fafafa;
          border: 1px solid #eaeaea;
          border-radius: 3px;
          padding: 1rem 1.25rem;
          margin: 1.5rem 0;
        }
        .docs blockquote p {
          margin: 0;
        }

        /* Card */
        .docs .card {
          margin: 1.5rem 0;
          border-radius: 5px;
          border: 1px solid #eaeaea;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          transition: box-shadow 0.2s ease;
        }
        .docs .card:hover {
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        .docs .card > a {
          display: flex;
          flex-direction: column;
          width: 100%;
          color: #666666;
          padding: 1.5rem;
          border: none;
          transition: color 0.2s ease;
        }
        .docs .card > a:hover {
          color: #111;
        }
        .docs .card > a > h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #111;
          margin-top: 0;
          margin-bottom: 0.25rem;
        }
        .docs .card > a > small {
          font-size: 0.875rem;
          color: inherit;
        }

        /* Misc */
        .docs hr {
          border: 0;
          border-top: 1px solid #eaeaea;
          margin: 1.25rem 0;
        }
        .docs ul,
        .docs ol {
          padding-left: 1.5rem;
          margin: 1.25rem 0;
        }
        .docs ul {
          list-style-type: none;
        }
        .docs li {
          margin-bottom: 0.625rem;
        }
        ul :global(li:before) {
          content: '-';
          color: #999999;
          position: absolute;
          margin-left: -1rem;
        }

        .docs .inline-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-column-gap: 16px;
          grid-row-gap: 16px;
          padding-left: 0;
        }

        @media screen and (max-width: 640px) {
          .docs .inline-buttons {
            grid-template-columns: 1fr 1fr;
          }
        }

        .docs .inline-buttons li {
          margin-bottom: 0;
        }

        .docs .inline-buttons li:before {
          content: '';
        }

        .docs .inline-buttons li a {
          -webkit-appearance: none;
          display: flex;
          height: 100%;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          font-weight: 500;
          font-size: 0.875rem;
          text-align: center;
          line-height: 1.5;
          color: #666;
          background-color: #fff;
          user-select: none;
          cursor: pointer;
          box-sizing: border-box;
          text-decoration: none;
          padding: 12px 25px;
          margin: 0px;
          transition: all 0.2s ease 0s;
          overflow: hidden;
          outline: none;
          border: 1px solid #eaeaea;
          border-radius: 5px;
        }

        .docs .inline-buttons li a:hover {
          color: #000;
          border-color: #000;
        }
      `}</style>
    </div>
  );
}
