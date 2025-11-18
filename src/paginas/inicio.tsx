import CartaoPersonagem from '@/components/cartao-personage/cartao-personagem';
import Titulo from '@/components/titulo/titulo';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useApiPersonagem } from '@/hooks/useApiPersonagem';
import { AnimatePresence, motion } from 'motion/react';

export default function Inicio() {
  const api = useApiPersonagem();

  const {
    personagens,
    isLoading,
    error,
    paginaAtual,
    totalPaginas,
    proximaPagina,
    paginaAnterior,
    irParaPagina,
  } = api.listarPersonagensPaginado();

  if (isLoading)
    return (
      <div className="flex justify-center pt-20">Carregando personagens...</div>
    );
  if (error)
    return (
      <div className="flex justify-center pt-20">
        Erro ao carregar personagens
      </div>
    );

  const pagina = (numPagina: number) => {
    return (
      <PaginationItem key={numPagina}>
        <PaginationLink
          className="btn-secondary btn cursor-pointer"
          onClick={() => irParaPagina(numPagina)}
          isActive={numPagina === paginaAtual}
        >
          {numPagina}
        </PaginationLink>
      </PaginationItem>
    );
  };

  const valorInicial = () => {
    let inicio = paginaAtual - 1;
    if (paginaAtual == 1) {
      inicio = 1;
    }
    if (paginaAtual == totalPaginas - 1) {
      inicio = paginaAtual - 2;
    }
    return inicio;
  };

  const paginas = () => {
    const pags: number[] = [];
    const inicio = valorInicial();
    const ate = paginaAtual == 1 ? 4 : paginaAtual + 2;
    if (paginaAtual < totalPaginas) {
      for (let i = inicio; i <= ate && i <= totalPaginas; i++) {
        pags.push(i);
      }
    } else {
      for (let i = totalPaginas - 3; i <= totalPaginas; i++) {
        pags.push(i);
      }
    }
    return pags.map((num) => pagina(num));
  };

  const paginacao = () => {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Pagination className="mt-10 mb-5">
            <PaginationContent>
              {paginaAtual > 1 && (
                <PaginationPrevious
                  className="btn-secondary btn mr-2 cursor-pointer"
                  onClick={() => paginaAnterior()}
                />
              )}
              {paginas()}
              {paginaAtual < totalPaginas && <PaginationEllipsis />}

              <PaginationItem>
                {paginaAtual < totalPaginas && (
                  <PaginationNext
                    className="btn-secondary btn ml-2 cursor-pointer"
                    onClick={() => proximaPagina()}
                  />
                )}
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <>
      <div className="flex justify-center">
        <Titulo texto="Personagens" />
      </div>

      {paginacao()}
      <div className="perspective mt-12 mb-8">
        <div className="grid grid-cols-2 gap-6 p-4 pl-6 lg:grid-cols-4">
          {personagens?.map((personagem) => (
            <AnimatePresence mode="sync" key={`pre${personagem.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                key={`div${personagem.id}`}
              >
                <CartaoPersonagem key={personagem.id} personagem={personagem} />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </>
  );
}
