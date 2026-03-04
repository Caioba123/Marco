import { Link } from "react-router-dom";
import "../App.css";

export default function Tela2() {
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

      <section className="section">
        <div className="container intro">
          <h2>Sobre o Museu</h2>
          <p>
            Este é um acervo digital inspirado em layout de portfólio minimalista,
            mas dedicado a contar histórias de lendas do futebol — eras, posições e impacto.
          </p>

          <p>
            Próximo passo: criar coleções (por clubes, seleções, goleiros, camisas 10),
            adicionar busca e deixar o grid igualzinho ao do site referência.
          </p>

          <Link to="/" className="btn btn--ghost" style={{ color: "#000", borderColor: "rgba(0,0,0,.35)" }}>
            Voltar ao Acervo
          </Link>
        </div>
      </section>
    </main>
  );
}