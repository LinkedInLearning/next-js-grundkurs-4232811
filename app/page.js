'use client';

export default function Home() {
  return (
    <main className="test">
      Hallo <span>Next.js</span>
      <style jsx>
        {`
          span {
            color: pink;
          }
        `}
      </style>
    </main>
  );
}
