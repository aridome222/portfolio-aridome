import Image from "next/legacy/image";

export default function PostPage() {
  return (
    <>
      <div className="pt-20">
        <div className="relative w-full h-64">
          <Image
            src="/home_imgs/travel_lufy.jpeg"
            alt="header"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <section id="profile">
          <h1>プロフィール</h1>
          <p>
            宮崎大学大学院工学研究科工学専攻先端情報コース修士1年の有留直希です。
          </p>
        </section>
        <section id="profile">
          <h1>スキル</h1>
          <p>
            C, C++, Python, JavaScript, TypeScript, React, Next.js, Tailwind
            CSS, Flask, MySQL, PostgreSQL, Git, Docker
          </p>
        </section>
        <section id="profile">
          <h1>制作物</h1>
          <p>OnFes, Tacktail</p>
        </section>
        <section id="profile">
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
