interface ShogiPieceProps {
  name: string;
}

export const ShogiPiece = ({ name }: ShogiPieceProps) => {
  return (
    <div className="w-[50px] h-[60px] bg-cover bg-[url('/shogi/mokume.png')] clip-path-custom-shape flex items-center justify-center font-serif text-[24px] font-bold text-black [writing-mode:vertical-rl] pt-1">
      {name}
    </div>
  );
};
