import { useState } from 'react';
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

    return (
        <>
            {/* トリガーボタン */}
            <button
                onClick={handleOpen}
                className='bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded shadow'
            >
                詳細はこちら
            </button>

            {/* モーダル本体 */}
            {open && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
                    onClick={handleOpen}
                >
                    {/* モーダルの中身 */}
                    <div
                        className='bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6 relative'
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* 閉じるボタン */}
                        <button
                            onClick={handleOpen}
                            className='absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl'
                        >
                            ×
                        </button>

                        {/* ヘッダー */}
                        <h2 className='text-2xl font-bold text-center mb-4'>
                            {product.title}
                        </h2>

                        {/* 画像 */}
                        <div className='relative w-full aspect-[2/1] mb-4'>
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
                        <div className='flex flex-wrap gap-2 mb-4'>
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
                                        className='text-blue-500 hover:text-blue-700 underline'
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
                                className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
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
