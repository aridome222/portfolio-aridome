import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@components/layout/Footer';

export const metadata: Metadata = {
    title: '有留直希のポートフォリオサイト',
    description: '宮崎大学大学院工学研究科工学専攻先端情報コース修士1年 有留直希',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ja'>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
