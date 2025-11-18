import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import type { Personagem } from '@/types/personagem';
import { AnimatePresence, motion } from 'motion/react';

interface CartaoPersonagemProps {
  personagem: Personagem;
  className?: string;
}

export default function CartaoPersonagem({
  personagem: p,
  className,
}: CartaoPersonagemProps) {
  const informacao = (titulo: string, informacao: string | null) => {
    const valor = informacao ?? '-';
    return (
      <div className="flex justify-between">
        <span>{titulo}</span>
        <span className="font-medium">{valor}</span>
      </div>
    );
  };

  const imagem = p.urlImagem ? p.urlImagem : 'grougu.jpg';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
        }}
        whileHover={{
          scale: [null, 1.07, 1.1],
          transition: {
            duration: 0.5,
            times: [0, 0.6, 1],
            ease: ['easeInOut', 'easeOut'],
          },
        }}
      >
        <Card
          className={`before:bg-card relative aspect-11/12 w-full max-w-sm transform-gpu cursor-pointer bg-cover bg-center bg-no-repeat before:pointer-events-none before:absolute before:inset-0 before:opacity-65 hover:z-20 ${className ?? ''}`}
          style={{
            backgroundImage: `url("${imagem}")`,
            boxShadow: '0 4px 20px var(--card)',
          }}
        >
          <CardHeader className="relative z-10 text-center">
            <CardTitle className="texto-secundario uppercase">
              {p.nome}
            </CardTitle>
            <CardDescription>Ficha do personagem</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="flex flex-col space-y-3 text-sm">
              {informacao('Ano nascimento', p.anoNascimento)}
              {informacao('Peso', p.peso)}
              {informacao('Altura', p.altura)}
              {informacao('Cor dos cabelos', p.corCabelo)}
              {informacao('Cor dos olhos', p.corOlhos)}
              {informacao('Genero', p.genero)}
              {informacao('Cor pele', p.corPele)}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
