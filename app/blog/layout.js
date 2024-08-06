export default function BlogLayout({ children }) {
  return <div>
    {children}

    <section className="mt-8 border-t pt-5">
      <h2 className="font-bold">Neueste Artikel</h2>
      <p>Hier sollen die neuen Artikel stehen</p>
    </section>
  </div>;
}