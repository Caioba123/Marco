import { Link } from "react-router-dom";
import { legends } from "../data/legends";
import "../App.css";

export default function Tela() {
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
            <a className="nav__link nav__link--cta" href="#grid">Acervo</a>
          </nav>
        </div>
      </header>

      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1400&q=80)",
        }}
      >
        <div className="container hero__inner">
          <h1 className="hero__title">O Acervo</h1>
          <p className="hero__subtitle">
            Um museu digital com lendas do futebol. Clique em uma peça para abrir a história.</p>
          <button
            className="btn btn--ghost"
            onClick={() => document.getElementById("grid")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explorar
          </button>
        </div>
      </section>

      <section className="section" id="grid">
        <div className="container">
          <div className="grid">
            {legends.map((item) => (
              <article className="card" key={item.id}>
                <Link to={`/lenda/${item.id}`} className="card__media">
                  <img src={item.cover} alt={item.name} loading="lazy" />
                </Link>

                <div className="card__meta">
                  <div className="card__kicker">{item.category.toUpperCase()}</div>
                  <h3 className="card__title">{item.name}</h3>
                  <p className="card__desc">
                    <strong>{item.role}</strong> • {item.era}
                    <br />
                    {item.highlight}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}