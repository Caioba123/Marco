import { useState } from "react"
import camisaVasco from '../src/assets/img/Camisa Vasco.png';
import shortNike from '../src/assets/img/Short Nike.png';
import tenisNike from '../src/assets/img/Tenis Nike.png';
import "./App.css"

function App() {
  const [carrinho, setCarrinho] = useState([])
  function adicionarProduto(nome, preco) {
    setCarrinho([...carrinho, { nome, preco }])
  }
  const total = carrinho.reduce((acc, item) => acc + item.preco, 0)

function removerProduto(index) {
  const novoCarrinho = carrinho.filter((_, i) => i !== index)
    setCarrinho(novoCarrinho)
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Loja do Müller</h1>

      {/* Imagem dos produtos */}
      <div className="row">

        <div className="col-md-4">
          <div className="card p-3">  
            <h5>Camisa do Vasco</h5>
            <img src={camisaVasco} alt="Camisa do Vasco" />
            <br />
            <h6>Inspirada na história de um clube que nunca foi vencido pelo medo. 
            O design da camisa homenageia a coragem do Vasco de mudar o jogo dentro e fora de campo.</h6>
            <p>R$ 499,90</p>
            <button 
              className="btn btn-primary"
              onClick={() => adicionarProduto("Camisa", 499.9)}
            >
              Adicionar
            </button>
          </div>
        </div>




        <div className="col-md-4">
          <div className="card p-3">
            <h5>Short da Nike Original </h5>
            <img src={shortNike} alt="Shorts da Nike" />
            <br />
            <h6>Feito para corrida, treino e yoga, nosso Shorts Challenger que absorve
             o suor mantém a leveza e o frescor com um ajuste relaxado que ajuda você a aproveitar os seus movimentos. </h6>
            <p>R$ 129,99</p>
            <button 
              className="btn btn-primary"
              onClick={() => adicionarProduto("Short", 129.99)}>
              Adicionar
            </button>
          </div>
        </div>




        <div className="col-md-4">
          <div className="card p-3">
            <h5>Tênis da Nike Original</h5>
            <img src={tenisNike} alt="Tenis da Nike" />
            <br />
            <h6>Expresse toda sua atitude com o Nike Air Max Plus, um modelo com 
             Tuned Air que oferece estabilidade premium e sustentação surpreendente.</h6>
            <p>R$ 199,90</p>
            <button 
              className="btn btn-primary"
              onClick={() => adicionarProduto("Tênis", 199.9)}
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>




      {/* Carrinho de produtos */}
      <div className="mt-5">
        <h2>Carrinho</h2>

        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          <ul className="list-group">
            {carrinho.map((item, index) => (
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                    {item.nome} - R$ {item.preco.toFixed(2)}
               </span>
              <button
                   className="btn btn-danger btn-sm"
                  onClick={() => removerProduto(index)}
              >
              Remover
             </button>
             </li>
            ))}
          </ul>
        )}

        <h4 className="mt-3">Total: R$ {total.toFixed(2)}</h4>
      </div>

    </div>
  )
}

import 'bootstrap/dist/css/bootstrap.min.css'; 
export default App
