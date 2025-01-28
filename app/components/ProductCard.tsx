'use client';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from '@material-tailwind/react';

type ProductCardProps = {
    image: string;
    title: string;
    detail: string;
};

export function ProductCard({ image, title, detail }: ProductCardProps) {
    return (
        <Card className='mt-12 ml-6 w-96'>
            <CardHeader color='blue-gray' className='relative'>
                <img src={image} alt='card-image' />
            </CardHeader>
            <CardBody>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                    {title}
                </Typography>
                <Typography>{detail}</Typography>
            </CardBody>
            <CardFooter className='pt-0'>
                <Button>Read More</Button>
            </CardFooter>
        </Card>
    );
}
