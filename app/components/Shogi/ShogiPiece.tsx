interface ShogiPieceProps {
  name: string;
}

export const ShogiPiece = ({ name }: ShogiPieceProps) => {
  // 文字数に応じて文字サイズを変更
  const textSizeClass =
    name.length === 1
      ? "text-[24px]"
      : name.length === 2
      ? "text-[22px]"
      : name.length === 3
      ? "text-[18px]"
      : "text-[12px]";
  return (
    <div className="w-[50px] h-[60px] bg-cover bg-[url('/shogi/mokume.png')] clip-path-custom-shape flex items-center justify-center font-serif text-[24px] font-bold text-black [writing-mode:vertical-rl] pt-1.5">
      <span className={textSizeClass}>{name}</span>
    </div>
  );
};
