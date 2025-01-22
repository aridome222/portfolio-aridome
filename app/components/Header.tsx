import { ShogiPiece } from "@components/Shogi/ShogiPiece";

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="flex gap-4 fixed z-2 top-0 right-0 pt-2.5 pr-4">
          <li>
            <a href="#profile" title="Profile">
              <ShogiPiece name="我" />
            </a>
          </li>
          <li>
            <a href="#skill" title="Skill">
              <ShogiPiece name="技" />
            </a>
          </li>
          <li>
            <a href="#works" title="Works">
              <ShogiPiece name="開発" />
            </a>
          </li>
          <li>
            <a href="#contact" title="Contact">
              <ShogiPiece name="＠" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
