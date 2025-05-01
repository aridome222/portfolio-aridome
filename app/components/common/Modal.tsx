import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PRODUCT_LIST } from '@/app/data/productList';

type ModalProps = {
    title: string;
};

export const Modal: React.FC<ModalProps> = ({ title }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const product = PRODUCT_LIST.find((p) => p.title === title);
    if (!product) {
        throw new Error(`Product with title "${title}" not found`);
    }

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <>
            {/* トリガーボタン */}
            <button
                onClick={handleOpen}
                className='rounded bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-white shadow'
            >
                詳細はこちら
            </button>

            {/* モーダル本体 */}
            {open && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
                    onClick={handleOpen}
                >
                    {/* モーダルの中身 */}
                    <div
                        className='relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-lg'
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* 閉じるボタン */}
                        <button
                            onClick={handleOpen}
                            className='absolute right-3 top-3 text-xl text-gray-500 hover:text-red-500'
                        >
                            ×
                        </button>

                        {/* ヘッダー */}
                        <h2 className='mb-4 text-center text-2xl font-bold'>
                            {product.title}
                        </h2>

                        {/* 画像 */}
                        <div className='relative mb-4 aspect-[2/1] w-full'>
                            <Image
                                src={product.image}
                                alt={product.alt}
                                fill
                                className='object-fill'
                                priority
                            />
                        </div>

                        {/* 説明文 */}
                        {product.description.map((desc, index) => (
                            <p key={index} className='mb-2'>
                                {desc}
                            </p>
                        ))}

                        {/* 使用技術 */}
                        <h3 className='mt-6 font-semibold'>使用技術</h3>
                        <div className='mb-4 flex flex-wrap gap-2'>
                            {product.teckStacks.map((tech, index) => (
                                <span key={index}>
                                    {tech}
                                    {index === product.teckStacks.length - 1 ? '.' : ','}
                                </span>
                            ))}
                        </div>

                        {/* リンク */}
                        <h3 className='mt-6 font-semibold'>リンク</h3>
                        <div className='flex gap-4'>
                            {product.links.length > 0 ? (
                                product.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-blue-500 underline hover:text-blue-700'
                                    >
                                        {link.kinds}
                                    </a>
                                ))
                            ) : (
                                <p>リンクなし</p>
                            )}
                        </div>

                        {/* フッター（戻るボタン） */}
                        <div className='mt-6 text-right'>
                            <button
                                onClick={handleOpen}
                                className='rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600'
                            >
                                戻る
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
