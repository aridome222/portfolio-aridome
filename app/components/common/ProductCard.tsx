'use client';
import Image from 'next/legacy/image';
import { Modal } from '@components/common/Modal';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    // Button,
} from '@material-tailwind/react';

type ProductCardProps = {
    image: string;
    alt: string;
    title: string;
    detail: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
    image,
    alt,
    title,
    detail,
}: ProductCardProps) => {
    return (
        <Card className='ml-6 mt-12 h-auto w-80'>
            <CardHeader color='blue-gray' className='relative'>
                <Image
                    src={image}
                    alt={alt}
                    layout='responsive'
                    width={200}
                    height={100}
                    objectFit='fill'
                />
            </CardHeader>
            <CardBody>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                    {title}
                </Typography>
                <Typography className='line-clamp-2'>{detail}</Typography>
            </CardBody>
            <CardFooter className='pt-0'>
                <Modal title={title} />
            </CardFooter>
        </Card>
    );
};
