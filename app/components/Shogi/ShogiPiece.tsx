interface ShogiPieceProps {
    name: string;
}

export const ShogiPiece = ({ name }: ShogiPieceProps) => {
    // 文字数に応じて文字サイズを変更
    const textSizeClass =
        name.length === 1
            ? 'text-[24px]'
            : name.length === 2
              ? 'text-[22px]'
              : name.length === 3
                ? 'text-[18px]'
                : 'text-[12px]';
    return (
        <div className='relative w-[50px] h-[60px] flex items-center justify-center'>
            <div className='absolute inset-0 bg-black clip-path-custom-shape-inner'>
                <div className='w-full h-full bg-amber-400 clip-path-custom-shape flex items-center justify-center font-serif text-black font-bold [writing-mode:vertical-rl] pt-1.5 pr-0.5'>
                    <span className={textSizeClass}>{name}</span>
                </div>
            </div>
        </div>
    );
};
