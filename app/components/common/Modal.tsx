import React from 'react';
import Image from 'next/legacy/image';
import { PRODUCT_LIST } from '@/app/data/productList';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from '@material-tailwind/react';

type ModalProps = {
    title: string; // ProductCard から受け取る title
};

export const Modal: React.FC<ModalProps> = ({ title }: ModalProps) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    // title に一致する product を取得
    const product = PRODUCT_LIST.find((p) => p.title === title);
    // タイトルの記述ミスがある場合はエラーを吐く
    if (!product) {
        throw new Error(`Product with title "${title}" not found`);
    }

    return (
        <>
            <Button onClick={handleOpen} variant='gradient'>
                詳細はこちら
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>{product.title}</DialogHeader>
                <DialogBody>
                    <div>
                        <Image
                            src={product.image}
                            alt={product.alt}
                            layout='responsive'
                            width={200}
                            height={100}
                            objectFit='fill'
                        />
                        <br />
                        {product.description.map((desc, index) => {
                            return <p key={index}>{desc}</p>;
                        })}
                        <h3 className='mt-6'>使用技術</h3>
                        <div className='flex gap-2'>
                            {/* indexよりもproductのteckStacksの要素にidを振ってteckStack.idを使った方がリストの要素が削除・追加された時に不要なレンダリングが発生しないが、今回は要素の削除・追加がないためindexを使用 */}
                            {product.teckStacks.map((tech, index) => {
                                return <span key={index}>{tech},</span>;
                            })}
                        </div>
                        <h3 className='mt-6'>リンク</h3>
                        <div className='flex gap-2'>
                            {/* リンクがあれば表示、なければ「リンクなし」と表示 */}
                            {product.links.length > 0 ? (
                                product.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-blue-500 hover:text-blue-700'
                                    >
                                        {link.kinds}
                                    </a>
                                ))
                            ) : (
                                <p>リンクなし</p>
                            )}
                        </div>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant='text'
                        color='red'
                        onClick={handleOpen}
                        className='mr-1'
                    >
                        <span>戻る</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};
