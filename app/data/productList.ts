/** 制作物カードのモーダルで表示する情報をまとめたファイル **/
// 制作物のリンク情報
type ProductLink = {
    href: string;
    kinds: 'GitHub' | 'Slide' | 'Web App';
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
            {
                href: 'https://portfolio-aridome.vercel.app',
                kinds: 'Web App',
            },
        ],
    },
    {
        title: 'OnFes',
        image: '/products/OnFES.png',
        alt: '初ハッカソンで作成したOnFesのメインページ',
        description: [
            '初めてのハッカソンで開発したWebアプリです。',
            'OnFESは、オンライン上で自信のある成果物や好きなものを出し合い、同じ趣味嗜好を持つ人たちで盛り上がれるブースとなっています。',
            '特にこのハッカソンでは、オンラインフェスの１つである技育祭を主題に、社会人エンジニアや学生エンジニアが盛り上がれるブースとして開発しました！',
            '私はバックエンドを担当し、技術的な挑戦と今後の拡張性などの点から初めてのGo言語で実装を行いました。Go言語に詳しい先輩にレイヤードアーキテクチャの設計手法を教わりながらモブプロでエンドポイントを作り上げ、さらに一人でも実装できるようになった時はとても嬉しかった覚えがあります。',
            '一番苦労した点として、慣れないGo言語でレイヤードアーキテクチャの設計手法をエンドポイントの実装に落とし込むことでした。特に、エンドポイントをコントローラー層、ユースケース層、ドメイン層、リポジトリ層の4層に分けた際に、各層を具体的にどのように実装し、依存関係各層間のインターフェースをどのように実装し、呼び出すかなどが難しく、何度も先輩に質問をして実装を進めました。',
            '約1週間という短い期間でGo言語やレイヤードアーキテクチャを学ぶことができ、今後のAPI設計に役立つ知識を得ることができました。',
        ],
        teckStacks: ['Go', 'Gin', 'Gorm', 'PostgreSQL', 'Air', 'PgAdmin', 'Render.com'],
        links: [
            {
                href: 'https://github.com/aridome222/Backend-Festival-Booth',
                kinds: 'GitHub',
            },
            {
                href: 'https://docs.google.com/presentation/d/1iMzPGfuHGFE-4xP5HDIdzmaOzY39G8cRd-i6tG31mSw/edit#slide=id.p',
                kinds: 'Slide',
            },
            {
                href: 'https://frontend-festival-booth.vercel.app/',
                kinds: 'Web App',
            },
        ],
    },
    {
        title: 'Tacktail',
        image: '/products/Tacktail.png',
        alt: 'Open Hack Uで開発したTacktailのメインページ',
        description: [
            '2回目のハッカソン。Open Hack U 2024 TOKYOに参加した時に開発したWebアプリです。',
            'Tacktailは、自宅でのカクテル作りはハードルが高いという課題を解決するために、カクテル作りの道標となるストーリーモードや自分で作ったカクテルの写真をアプリ内でコレクションできる機能があります。他の類似アプリと異なる点は、ストーリーモードを通じてカクテル作りを楽しむきっかけを提供できることです。また、カクテルの材料の分量を比率で表示することで、計量器を使わずに目分量で自宅にあるコップの容器に合ったカクテルを作れます。',
            '私はフロントエンドを担当し、チームのスキルセットなどを考慮してTypeScriptやNext.js等を用いて実装しました。また、今回はデザイン重視の開発となるため、Tailwind CSSよりもデザインの自由度が高いCSS Modulesを使用し、見た目の実装を行いました。',
            '実装で一番工夫したことは、材料の分量を比率で表示するためのプログレスバーを自作したことです。標準のプログレスバーでは、せっかく色合いを考えてデザインしたWebページのカクテルバーの雰囲気を壊してしまうため、プログレスバーを自作しました。デザインは10個のブロック氷をモチーフにし、カクテルの材料の比率に応じて各ブロックの色が変わるようにしました。',
            '約1週間という短い期間でフロントエンドの実装を通じて、ユーザー目線での開発の重要性を学ぶことができました。',
        ],
        teckStacks: [
            'TypeScript',
            'React',
            'Next.js',
            'CSS Modules',
            'Git/GitHub',
            'Vercel',
        ],
        links: [
            {
                href: 'https://github.com/aridome222/Frontend-Tacktail',
                kinds: 'GitHub',
            },
            {
                href: 'https://docs.google.com/presentation/d/13gpCI2pZnJn-xMfkkRw7cZ-a3XLdtMcNmIIhBNMdtuA/edit#slide=id.p',
                kinds: 'Slide',
            },
            // バックエンド（Google Cloud）で500エラーが発生し、ページが正常に表示されないため、コメントアウトして対応
            // {
            //     href: 'frontend-tacktail.vercel.app',
            //     kinds: 'Web App',
            // },
        ],
    },
    {
        title: '学生エンジニアバイト',
        image: '/products/albite.png',
        alt: '学生エンジニアバイトで使用した技術スタック集',
        description: [
            'Webアプリケーション開発のアルバイトに約1年従事していました。',
            'アルバイトでは、主にフロントエンドを担当し、Figmaで実装された画面デザインをもとに、TypeScript＋Next.js＋TailwindCSS＋Storybookを用いたWebアプリ画面の実装を担当していました。アルバイト始めたての頃は、アトミックデザインという設計手法を教えて貰い、コンポーネント単位で画面要素を作る経験を積みました。',
            'バックエンドではHasuraを用いたGraphQL APIを活用し、Apollo Clientを用いてフロントエンドとバックエンドの連携を担当していました。具体的には、クエリやミューテーションを作成し、ReactコンポーネントからAPIを呼び出してCSV形式のデータをエクスポート・インポートする機能を実装しました。',
            'アルバイトを通じて実務経験を積むことができ、基礎的なWebアプリケーション開発のスキルを学びつつ、エンジニアとして働くイメージを持つことができました。',
        ],
        teckStacks: [
            'TypeScript',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Storybook',
            'Figma',
            'Hasura',
            'GraphQL',
            'Git/GitHub',
            'Source Tree',
            'Backlog',
            'Slack',
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
        image: '/products/etrobo2024.png',
        alt: '2024年度ETロボコンの競技攻略風景',
        description: [
            'ETロボコンは、学生時代に最も力を入れたチーム活動です。',
            'この大会では、組み込みソフトウェアの開発技術を競い、「走行競技」と「モデル審査」の2つの観点から評価されます。',
            '「走行競技」では、ロボットを実際に走行させ、課題コースをどれだけ正確かつ速く走れるかを競います。',
            '「モデル審査」では、UMLを用いた設計モデル（設計書）をもとに、ソフトウェアの設計が適切かどうかが評価されます。',
            '大会では、学生チームや企業チームを含む全チームに対して、一律に指定された走行体（ロボット）が提供されます。その走行体のRaspberry Pi上で走行制御や各種アルゴリズムの開発を行い、また、モデル審査のための設計モデルを作成しました。',
            '実績として、初参加の2023年度は九州地区優勝・全国6位、副チームリーダーとして参加した2024年度は九州地区準優勝、全国5位の成績を収めました。',
            '約10人のチームで8ヶ月間にわたりアジャイル開発を実践し、C++やPythonを用いた開発スキルに加え、チーム開発における設計・実装の経験や、タスク管理・コミュニケーション能力を養うことができました。',
        ],
        teckStacks: [
            'C++',
            'Python',
            'OpenCV',
            'Flask',
            'Google Test',
            'Git/GitHub',
            'GitHub Actions',
            'Rasberry Pi',
            'Slack',
            'Notion',
            'Miro',
        ],
        links: [
            {
                href: 'https://github.com/KatLab-MiyazakiUniv/etrobocon2024',
                kinds: 'GitHub',
            },
        ],
    },
];
