import xWing from '/src/assets/img/aircraft.png';
import deathStar from '/src/assets/img/death-star.png';
import { AnimatePresence, motion } from 'motion/react';
const Titulo = ({ texto }: { texto: string }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="flex"
      >
        <a
          href="https://www.flaticon.com/free-icons/star-wars"
          title="star wars icons"
        >
          <img src={deathStar} className="mt-3 mr-10 w-20" />
        </a>
        <h1 className="texto-principal">{texto}</h1>
        <a
          href="https://www.flaticon.com/free-icons/x-wing"
          title="x wing icons"
        >
          <img src={xWing} className="ml-6 w-26" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
};

export default Titulo;
