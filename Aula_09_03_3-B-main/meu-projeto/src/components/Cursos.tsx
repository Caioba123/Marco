import nodeImg from '../assets/img/NodeJS.jpg';
import reactImg from '../assets/img/reactJS.png';
import typescriptImg from '../assets/img/TypeScript.png';
import '../App.css';


export default function Cursos() {
  return (
    <div className="container">

      <div className="cursos">

        <div className="curso">
          <h3>Curso de React</h3>
          <p>Duração: 10 semanas</p>
          <img src={reactImg} alt="React" />
          <button>Inscrever-se</button>
        </div>

        <div className="curso">
          <h3>Curso de TypeScript</h3>
          <p>Duração: 6 semanas</p>
          <img src={typescriptImg} alt="TypeScript" />
          <button>Inscrever-se</button>
        </div>

        <div className="curso">
          <h3>Curso de Node.js</h3>
          <p>Duração: 8 semanas</p>
          <img src={nodeImg} alt="Node" />
          <button>Inscrever-se</button>
        </div>

      </div>
    </div>
  );
}