import { ShogiPiece3D } from './components/Shogi/ShogiPiece3D';
import { ProductCard } from './components/ProductCard';

export default function PostPage() {
    return (
        <>
            <div className="bg-[url('/back_img/gold_paper.jpg')] bg-cover bg-fixed bg-center bg-repeat-round">
                <ShogiPiece3D modelFileName='/3D_model/shogi/scene.gltf' />
                <section id='top' className='min-h-screen'>
                    <div>
                        <h2 className='p-10'>有留のポートフォリオサイト</h2>
                        <div className='p-4'>
                            <p>
                                私の学生エンジニアとしての人生は、将棋の対局のようなものだと思います。
                            </p>
                            <p>
                                序盤は学びの時期、大学のプログラミング演習や情報系の講義などで基本を一手ずつ積み重ねることで、自分の盤面を整えました。
                                中盤では、Web系のアルバイトやETロボコンなどの新しい挑戦が増え、試行錯誤しながら自分の盤面を広げました。
                                そして今、大学院生として中終盤に差し掛かり、次の一手一手が人生の勝負手となる重要な局面にいます。
                            </p>
                            <p>
                                これまでに積み上げてきた経験という駒たちを活かし、盤面全体を見渡しながら、自分にとっての最善手を見つけ出し、
                                そして、その一手が自分にとっての勝負手となるように、これからも一手ずつ努力を積み重ねていきます。
                            </p>
                        </div>
                    </div>
                </section>
                <section id='profile' className='min-h-screen'>
                    <h1>我</h1>
                    <div className='pl-6'>
                        <p>鹿児島県出身の大学院生。</p>
                        <p>
                            2020年に宮崎大学に入学、2024年に卒業。工学部情報システム工学科を次席で卒業。
                        </p>
                        <p>
                            2024年に宮崎大学大学院入学、2026年に卒業見込み。工学研究科光学専攻先端情報コースを課程。
                        </p>
                    </div>
                </section>
                <section id='skill' className='min-h-screen'>
                    <h1>技術</h1>
                    <p>
                        C, C++, Python, JavaScript, TypeScript, React, Next.js, Tailwind
                        CSS, Flask, MySQL, PostgreSQL, Git, Docker
                    </p>
                </section>
                <section id='works' className='min-h-screen'>
                    <h1>開発</h1>
                    <div className='grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3'>
                        <ProductCard
                            image='/products/portfolio.png'
                            alt='portfolio-image'
                            title='My Portfolio Site'
                            detail='趣味である将棋をコンセプトに作成したポートフォリオサイト（作成中）。'
                            // 使用技術は、Next.js, React, Typescript, Tailwind CSS, Three.js, Material Tailwindです。
                        />
                        <ProductCard
                            image='/products/OnFES_near.png'
                            alt='OnFES-image'
                            title='OnFes'
                            detail='初めてのハッカソンで開発したWebアプリです。
                            '
                        />
                        <ProductCard
                            image='/products/Tacktail.png'
                            alt='Tacktail-image'
                            title='Tacktail'
                            detail='2回目のハッカソン。Open Hack U 2024 TOKYOに参加した時に開発したWebアプリです。'
                        />
                        <ProductCard
                            image='/products/albite.png'
                            alt='albite-image'
                            title='学生エンジニアバイト'
                            detail='Webアプリケーション開発のアルバイトに約1年従事しています。'
                        />
                        <ProductCard
                            image='/products/etrobo2024.png'
                            alt='etrobo2024-image'
                            title='ETロボコン'
                            detail='ETロボコン大会に2年連続参加。2024年度は、九州地区準優勝、全国5位の実績を残せました。'
                        />
                    </div>
                </section>
                <section id='contact' className='min-h-screen'>
                    <h1>＠</h1>
                    <ul className='list-disc pl-8'>
                        <li>
                            Github:{' '}
                            <a href='https://github.com/aridome222'>@aridome222</a>
                        </li>
                        <li>
                            X: <a href='https://twitter.com/aridome222'>@aridome222</a>
                        </li>
                        <li>
                            Qiita: <a href='https://qiita.com/aridome222'>@aridome222</a>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
}
