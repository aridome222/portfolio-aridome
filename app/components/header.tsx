import Image from "next/image";

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
            </li>
            <li>
              <a href="#skill">スキル</a>
            </li>
            <li>
              <a href="#works">制作物</a>
            </li>
            <li>
              <a href="#contact">連絡先</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
