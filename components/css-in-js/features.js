import React from 'react';
import { useAmp } from 'next/amp';

import Container from '../container';
import Window from '../window';
import TitleOverlay from './svg/title-overlay';
import AvatarOverlay from './svg/avatar-overlay';
import SidebarOverlay from './svg/sidebar-overlay';
import Checkmark from '../icons/checkmark';
import Avatar from './avatar.mdx';
import TitleBlock from './title-block.mdx';
import Sidebar from './sidebar.mdx';

export default () => {
  const isAmp = useAmp();
  const Img = props =>
    React.createElement(isAmp ? 'amp-img' : 'img', {
      ...props,
      ...(isAmp
        ? {
            className: undefined
          }
        : {
            width: undefined
          })
    });

  return (
    <Container wide dark>
      <div className="col features">
        <ul>
          <li>
            <Checkmark inverse />
            <h4>Component Friendly</h4>
          </li>
          <li>
            <Checkmark inverse />
            <h4>Fully-Featured CSS</h4>
          </li>
          <li>
            <Checkmark inverse />
            <h4>SSR Enabled</h4>
          </li>
          <li>
            <Checkmark inverse />
            <h4>Developer Focused</h4>
          </li>
        </ul>

        <div className="flex">
          <div className="terminal-container">
            <Window height={297} backgroundColor="black" scroll={false}>
              {[Avatar, TitleBlock, Sidebar].map((file, idx) => (
                <div key={idx} className={`slide slide-${idx}`}>
                  {React.createElement(file, {})}
                </div>
              ))}
            </Window>
          </div>

          <div className="site-container">
            <Img src="/static/images/site.png" height={297} width={472} />
            <div className="overlay-container">
              {[AvatarOverlay, TitleOverlay, SidebarOverlay].map((overlay, idx) => (
                <div key={idx} className={`slide slide-${idx}`}>
                  {React.createElement(overlay, {})}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        ul {
          align-self: stretch;
          padding: 0 1rem;
          margin: 2.5rem 0 0 0;
          display: flex;
          list-style-type: none;
          align-items: center;
          justify-content: space-between;
        }
        li {
          display: flex;
          align-items: center;
        }
        h4 {
          margin: 0 0 0 0.5rem;
        }
        img {
          margin-top: 1rem;
          width: 90%;
        }
        .flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
          margin: 2.5rem 1rem 3rem;
        }
        .terminal-container {
          width: 100%;
          max-width: 29.5rem;
        }
        .features :global(pre) {
          margin: 0;
          white-space: pre-wrap;
          font-size: 12px;
          line-height: 1.5;
          padding: 0 1rem;
        }
        .site-container {
          display: flex;
          position: relative;
        }
        .terminal-container,
        .site-container {
          box-shadow: rgba(0, 0, 0, 0.48) 0px 2px 10px, rgba(0, 0, 0, 0.38) 0px 14px 50px;
          border-radius: 4px;
        }
        .terminal-container :global(.token) {
          color: #f1f1f1;
        }
        .terminal-container :global(.token.tag .token.punctuation) {
          color: #f1f1f1;
        }
        .terminal-container :global(.token.plain-text) {
          color: #c3c3c3;
        }
        .overlay-container {
          position: absolute;
          top: 32px;
          left: 0px;
        }
        .col {
          margin: 0 auto;
          max-width: 64rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .features :global(.hljs-keyword),
        .features :global(.hljs-params),
        .features :global(.hljs-name),
        .features :global(.hljs-tag) {
          font-weight: 600;
        }

        .features :global(.slide) {
          height: 0px;
          display: block;
          overflow: hidden;
        }
        .features :global(.slide-0) {
          animation: slideAnim1 9000ms ease infinite;
        }
        .features :global(.slide-1) {
          animation: slideAnim2 9000ms ease infinite;
        }
        .features :global(.slide-2) {
          animation: slideAnim3 9000ms ease infinite;
        }

        @keyframes slideAnim1 {
          0% {
            opacity: 1;
            height: unset;
          }
          27.9% {
            opacity: 1;
            height: unset;
          }
          28% {
            opacity: 0;
            height: 0px;
          }
          99% {
            height: 0px;
          }
        }
        @keyframes slideAnim2 {
          0% {
            opacity: 0;
            height: 0px;
          }
          27.9% {
            opacity: 0;
            height: unset;
          }
          38% {
            opacity: 1;
            height: unset;
          }
          54.9% {
            opacity: 1;
            height: unset;
          }
          55% {
            opacity: 0;
            height: 0px;
          }
        }
        @keyframes slideAnim3 {
          0% {
            opacity: 0;
            height: 0px;
          }
          55% {
            opacity: 0;
            height: unset;
          }
          66% {
            opacity: 1;
            height: unset;
          }
          99.8% {
            opacity: 1;
            height: unset;
          }
          99.9% {
            opacity: 0;
            height: 0px;
          }
        }

        @media screen and (max-width: 1023px) {
          ul {
            align-self: initial;
            flex-direction: column;
            align-items: flex-start;
            margin: 0 1rem 2.5rem 1rem;
          }
          li {
            margin: 1rem 0;
          }
          .col {
            align-items: center;
            flex-direction: column-reverse;
          }
          .flex {
            padding: 0 1rem;
            margin: 4rem 0 3rem;
          }
          .terminal-container {
            margin: 0 auto;
          }
          .site-container {
            display: none;
          }
        }
      `}</style>
    </Container>
  );
};
