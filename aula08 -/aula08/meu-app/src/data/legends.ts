import peleImg from "../assets/img/pelé.png";
import maradonaImg from "../assets/img/maradona.png";
import buffonImg from "../assets/img/buffon.png";


export type LegendItem = {
  id: string;
  name: string;
  era: string;
  role: string;
  highlight: string;
  cover: string;
  category: "Seleções" | "Clubes" | "Goleiros" | "Camisas 10";
};

export const legends: LegendItem[] = [
  {
    id: "pele",
    name: "Pelé",
    era: "1956–1977",
    role: "Atacante",
    highlight: "Ícone do futebol, 3 Copas do Mundo",
    cover: peleImg ,
    category: "Seleções",
  },
  {
    id: "maradona",
    name: "Maradona",
    era: "1976–1997",
    role: "Camisa 10",
    highlight: "Gênio criativo e liderança histórica",
    cover: maradonaImg,
    category: "Camisas 10",
  },
  {
    id: "buffon",
    name: "Buffon",
    era: "1995–2023",
    role: "Goleiro",
    highlight: "Longevidade, campeão do mundo, ícone da posição",
    cover: buffonImg,
    category: "Goleiros",
  },
];
