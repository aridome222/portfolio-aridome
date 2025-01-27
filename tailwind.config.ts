import type { Config } from 'tailwindcss';
import clipPath from 'tailwind-clip-path';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FFAD60',
                secondary: '#F9C270',
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
    plugins: [clipPath],
};
export default config;
