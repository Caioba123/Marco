import { Link, useParams } from "react-router-dom";
import { legends } from "../data/legends";
import "../App.css";

export default function Image() {
  const { id } = useParams();
  const item = legends.find((x) => x.id === id);

  if (!item) {
    return (
      <main className="section">
        <div className="container">
          <h2>Lenda não encontrada</h2>
          <Link to="/" className="btn btn--ghost">Voltar</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <header className="header">
        <div className="container header__inner">
          <div className="brand">
            <span className="brand__title">Museu de Lendas</span>
            <span className="brand__sub">Futebol</span>
          </div>

          <nav className="nav">
            <Link to="/" className="nav__link">Home</Link>
            <Link to="/sobre" className="nav__link">Sobre</Link>
            <Link to="/" className="nav__link nav__link--cta">Acervo</Link>
          </nav>
        </div>
      </header>

      <section
        className="detail"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.60)), url(${item.cover})`,
        }}
      >
        <div className="container detail__inner">
          <div className="detail__kicker">{item.category.toUpperCase()}</div>
          <h1 className="detail__title">{item.name}</h1>
          <p className="detail__subtitle">
            {item.role} • {item.era}
          </p>
          <p className="detail__text">{item.highlight}</p>

          <div className="detail__actions">
            <Link to="/" className="btn btn--ghost">Voltar ao Acervo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}