export const Header: React.FC = () => {
  return (
    <header>
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
