"use client";

import { ShogiPiece } from "@components/Shogi/ShogiPiece";
import { Link as ScrollLink } from "react-scroll";

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-end gap-4 fixed z-2 top-0 pt-2.5 pr-4 bg-gradient-to-b from-yellow-500 to-slate-200 w-full h-20">
          <li>
            <div className="cursor-pointer">
              <ScrollLink
                to="profile"
                smooth={true}
                duration={1000}
                offset={-80}
                spy={true}
              >
                <ShogiPiece name="我" />
              </ScrollLink>
            </div>
          </li>
          <li>
            <div className="cursor-pointer">
              <ScrollLink
                to="skill"
                smooth={true}
                duration={1000}
                offset={-80}
                spy={true}
              >
                <ShogiPiece name="技" />
              </ScrollLink>
            </div>
          </li>
          <li>
            <div className="cursor-pointer">
              <ScrollLink
                to="works"
                smooth={true}
                duration={1000}
                offset={-80}
                spy={true}
              >
                <ShogiPiece name="開発" />
              </ScrollLink>
            </div>
          </li>
          <li>
            <div className="cursor-pointer">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={1000}
                offset={-80}
                spy={true}
              >
                <ShogiPiece name="＠" />
              </ScrollLink>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
