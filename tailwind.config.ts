import type { Config } from 'tailwindcss';
import clipPath from 'tailwind-clip-path';
import lineClamp from '@tailwindcss/line-clamp';
import withMT from '@material-tailwind/react/utils/withMT';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FFAD60', // オレンジがかった明るいベージュ（アプリコット系）
                secondary: '#F9C270', // 少し淡いオレンジ（サンドベージュ系）
                beni: '#e60033', // 紅色（べにいろ）
            },
            clipPath: {
                // 元の駒の形
                // 'custom-shape': 'polygon(50% 0%, 87% 17%, 100% 100%, 0 100%, 13% 17%)'
                'custom-shape': 'polygon(50% 2%, 83% 17%, 94% 99%, 2% 99%, 15% 19%)',
                'custom-shape-inner':
                    'polygon(50% 0%, 89% 17%, 100% 100%, 0% 100%, 13% 18%)',
            },
        },
    },
    plugins: [clipPath, lineClamp],
};
export default withMT(config);
