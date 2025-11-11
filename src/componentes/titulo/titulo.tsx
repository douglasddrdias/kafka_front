const Titulo = (texto: string) => {
  return (
    <h1
      className="uppercase font-extrabold text-yellow-300 tracking-widest"
      style={{
        // big responsive size and luminous glow
        fontSize: "clamp(3rem, 10vw, 8rem)",
        textShadow:
          "0 0 10px rgba(255,230,120,0.9), 0 10px 30px rgba(0,0,0,0.8)",
        transform: "translateZ(60px)",
      }}
    >
      {texto}
    </h1>
  );
};

export default Titulo;
