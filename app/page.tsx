// import Image from "next/legacy/image";

export default function PostPage() {
  return (
    <>
      <div className="pt-20">
        {/* // 画像使うか未定 */}
        {/* <div className="relative w-full h-64">
          <Image
            src="/home_imgs/travel_lufy.jpeg"
            alt="header"
            layout="fill"
            objectFit="cover"
          />
        </div> */}

        <section id="top" className="min-h-screen">
          <div>
            <h2 className="p-10">学生エンジニア有留のポートフォリオサイト</h2>
            <div className="p-4">
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
        <section id="profile" className="min-h-screen">
          <h1>プロフィール</h1>
          <p>
            宮崎大学大学院工学研究科工学専攻先端情報コース修士1年の有留直希です。
          </p>
        </section>
        <section id="skill" className="min-h-screen">
          <h1>スキル</h1>
          <p>
            C, C++, Python, JavaScript, TypeScript, React, Next.js, Tailwind
            CSS, Flask, MySQL, PostgreSQL, Git, Docker
          </p>
        </section>
        <section id="works" className="min-h-screen">
          <h1>制作物</h1>
          <p>OnFes, Tacktail</p>
        </section>
        <section id="contact" className="min-h-screen">
          <h1>連絡先</h1>
          <ul className="list-disc ml-8">
            <li>
              Github: <a href="https://github.com/aridome222">@aridome222</a>
            </li>
            <li>
              X: <a href="https://twitter.com/aridome222">@aridome222</a>
            </li>
            <li>
              Qiita: <a href="https://qiita.com/aridome222">@aridome222</a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
