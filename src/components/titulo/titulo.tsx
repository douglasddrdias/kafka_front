import xWing from '/src/assets/img/aircraft.png';
import deathStar from '/src/assets/img/death-star.png';
const Titulo = ({ texto }: { texto: string }) => {
  return (
    <>
      <a
        href="https://www.flaticon.com/free-icons/star-wars"
        title="star wars icons"
      >
        <img src={deathStar} className="mt-3.5 mr-10 w-20" />
      </a>
      <h1 className="texto-principal cursor-pointer hover:scale-105">
        {texto}
      </h1>
      <a href="https://www.flaticon.com/free-icons/x-wing" title="x wing icons">
        <img src={xWing} className="ml-6 w-26" />
      </a>
    </>
  );
};

export default Titulo;
