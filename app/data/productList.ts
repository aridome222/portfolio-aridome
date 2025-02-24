// 制作物カードのモーダルで表示する情報をまとめたファイル
type ProductLink = {
    href: string;
    kinds: 'GitHub' | 'Slide' | string;
};

type Product = {
    title: string;
    image: string;
    alt: string;
    description: string[];
    teckStacks: string[];
    links: ProductLink[];
};

export const PRODUCT_LIST: Product[] = [
    {
        title: 'My Portfolio Site',
        image: '/products/portfolio.png',
        alt: '有留のポートフォリオサイトのメインページ',
        description: [
            '趣味である将棋をコンセプトに作成したポートフォリオサイト（作成中）です。',
            '作るのに苦労した部分は、将棋の駒作り(ヘッダーにある駒)と、3D将棋モデルの描画です。駒作りでは、駒名を自由に設定できるようにし、選択すると駒に書かれたところに遷移するようにしました!今後は、選択した駒の色を赤色にして、ページのどの箇所にいるのか視覚的に分かりやすくしようと考えています。3D将棋モデルは、モデル自体は外部から引っ張ってきたものですが、モデルを描画するフレームワークであるThree.jsは初めて使用したので描画でつまづき、公式ドキュメントや参考記事にしながら何とか描画できた記憶があります笑。',
        ],
        teckStacks: [
            'TypeScript',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Three.js',
            'Git/GitHub',
            'Vercel',
        ],
        links: [
            {
                href: 'https://github.com/aridome222/portfolio-aridome',
                kinds: 'GitHub',
            },
        ],
    },
    {
        title: 'OnFes',
        image: '/products/portfolio.png',
        alt: '有留のポートフォリオサイトのメインページ',
        description: [
            '趣味である将棋をコンセプトに作成したポートフォリオサイト（作成中）です。',
            '作るのに苦労した部分は、将棋の駒作り(ヘッダーにある駒)と、3D将棋モデルの描画です。駒作りでは、駒名を自由に設定できるようにし、選択すると駒に書かれたところに遷移するようにしました！今後は、選択した駒の色を赤色にして、ページのどの箇所にいるのか視覚的に分かりやすくしようと考えています。3D将棋モデルは、モデル自体は外部から引っ張ってきたものですが、モデルを描画するフレームワークであるThree.jsは初めて使用したので描画でつまづき、公式ドキュメントや参考記事にしながら何とか描画できた記憶があります笑。',
        ],
        teckStacks: [
            'TypeScript',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Three.js',
            'Git/GitHub',
            'Vercel',
        ],
        links: [
            {
                href: 'https://github.com/aridome222/portfolio-aridome',
                kinds: 'GitHub',
            },
        ],
    },
    {
        title: 'Tacktail',
        image: '/products/portfolio.png',
        alt: '有留のポートフォリオサイトのメインページ',
        description: [
            '趣味である将棋をコンセプトに作成したポートフォリオサイト（作成中）です。',
            '作るのに苦労した部分は、将棋の駒作り(ヘッダーにある駒)と、3D将棋モデルの描画です。駒作りでは、駒名を自由に設定できるようにし、選択すると駒に書かれたところに遷移するようにしました!今後は、選択した駒の色を赤色にして、ページのどの箇所にいるのか視覚的に分かりやすくしようと考えています。3D将棋モデルは、モデル自体は外部から引っ張ってきたものですが、モデルを描画するフレームワークであるThree.jsは初めて使用したので描画でつまづき、公式ドキュメントや参考記事にしながら何とか描画できた記憶があります笑。',
        ],
        teckStacks: [
            'TypeScript',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Three.js',
            'Git/GitHub',
            'Vercel',
        ],
        links: [
            {
                href: 'https://github.com/aridome222/portfolio-aridome',
                kinds: 'GitHub',
            },
        ],
    },
    {
        title: '学生エンジニアバイト',
        image: '/products/portfolio.png',
        alt: '有留のポートフォリオサイトのメインページ',
        description: [
            '趣味である将棋をコンセプトに作成したポートフォリオサイト（作成中）です。',
            '作るのに苦労した部分は、将棋の駒作り(ヘッダーにある駒)と、3D将棋モデルの描画です。駒作りでは、駒名を自由に設定できるようにし、選択すると駒に書かれたところに遷移するようにしました!今後は、選択した駒の色を赤色にして、ページのどの箇所にいるのか視覚的に分かりやすくしようと考えています。3D将棋モデルは、モデル自体は外部から引っ張ってきたものですが、モデルを描画するフレームワークであるThree.jsは初めて使用したので描画でつまづき、公式ドキュメントや参考記事にしながら何とか描画できた記憶があります笑。',
        ],
        teckStacks: [
            'TypeScript',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Three.js',
            'Git/GitHub',
            'Vercel',
        ],
        links: [
            {
                href: 'https://github.com/aridome222/portfolio-aridome',
                kinds: 'GitHub',
            },
        ],
    },
    {
        title: 'ETロボコン',
        image: '/products/portfolio.png',
        alt: '有留のポートフォリオサイトのメインページ',
        description: [
            '趣味である将棋をコンセプトに作成したポートフォリオサイト（作成中）です。',
            '作るのに苦労した部分は、将棋の駒作り(ヘッダーにある駒)と、3D将棋モデルの描画です。駒作りでは、駒名を自由に設定できるようにし、選択すると駒に書かれたところに遷移するようにしました!今後は、選択した駒の色を赤色にして、ページのどの箇所にいるのか視覚的に分かりやすくしようと考えています。3D将棋モデルは、モデル自体は外部から引っ張ってきたものですが、モデルを描画するフレームワークであるThree.jsは初めて使用したので描画でつまづき、公式ドキュメントや参考記事にしながら何とか描画できた記憶があります笑。',
        ],
        teckStacks: [
            'TypeScript',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Three.js',
            'Git/GitHub',
            'Vercel',
        ],
        links: [
            {
                href: 'https://github.com/aridome222/portfolio-aridome',
                kinds: 'GitHub',
            },
        ],
    },
];
