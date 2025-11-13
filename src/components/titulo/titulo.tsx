interface TituloProps {
  texto: string;
}
const Titulo = ({ texto }: TituloProps) => {
  return (
    <h2
      className="text-3xl font-extrabold tracking-widest text-yellow-300 uppercase md:text-6xl lg:text-8xl"
      style={{
        textShadow:
          '0 0 10px rgba(255,230,120,0.9), 0 10px 30px rgba(0,0,0,0.8)',
        transform: 'translateZ(60px)',
      }}
    >
      {texto}
    </h2>
  );
};

export default Titulo;
