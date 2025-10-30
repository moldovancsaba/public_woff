export default function Home() {
  return (
    <main className="page">
      <h1>AS Roma font demo</h1>
      <p>
        If you see this in the AS Roma typeface, the font is loading correctly.
      </p>

      <section className="block">
        <h2>Sample text</h2>
        <p className="sample">
          Roma, non <strong>pro patria</strong> sed pro <em>style</em>.
        </p>
      </section>

      <section className="block">
        <h2>Download Font</h2>
        <p>
          <a href="/fonts/ASRoma-Regular.woff" download className="download-link">
            ASRoma-Regular.woff
          </a>
        </p>
      </section>
    </main>
  );
}
