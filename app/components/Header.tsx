import Image from "next/legacy/image";
import { ShogiPiece } from "@components/Shogi/ShogiPiece";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="relative w-full h-64">
        <Image
          src="/home_imgs/travel_lufy.jpeg"
          alt="header"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <nav>
        <div>
          <ul className="flex justify-center items-center gap-4">
            <li>
              <a href="#profile">プロフィール</a>
              <ShogiPiece name="我" />
            </li>
            <li>
              <a href="#skill">スキル</a>
              <ShogiPiece name="技術" />
            </li>
            <li>
              <a href="#works">制作物</a>
              <ShogiPiece name="制作" />
            </li>
            <li>
              <a href="#contact">連絡先</a>
              <ShogiPiece name="連絡" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
