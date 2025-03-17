type ShogiPieceProps = {
    name: string; // 駒名
    textColor: string; // 選択されたときの駒の色
};

export const ShogiPiece = ({ name, textColor }: ShogiPieceProps) => {
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
        <div className='relative flex h-[60px] w-[50px] items-center justify-center'>
            <div className='absolute inset-0 bg-black clip-path-custom-shape-inner'>
                <div className='flex size-full items-center justify-center bg-amber-400 pr-0.5 pt-1.5 font-serif font-bold text-black clip-path-custom-shape [writing-mode:vertical-rl]'>
                    <span className={`${textColor} ${textSizeClass}`}>{name}</span>
                </div>
            </div>
        </div>
    );
};
