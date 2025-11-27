import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/lib/api-client';
import type { Personagem } from '@/types/personagem';
import { useState } from 'react';

export function useApiPersonagem() {
  const [paginaAtual, setPaginaAtual] = useState(1);

  const listarPersonagens = () => {
    return useQuery({
      queryKey: ['personagens'],
      queryFn: () => apiRequest<Personagem[]>('/personagem'),
      gcTime: 15 * 60 * 1000, // 15 minutes
    });
  };
  const listarPersonagensPaginado = (itemsPorPagina: number = 20) => {
    const { data, isLoading, error, refetch } = useQuery({
      queryKey: ['personagens', paginaAtual],
      queryFn: () => apiRequest<Personagem[]>('/personagem'),
      gcTime: 15 * 60 * 1000,
    });

    const personagensPaginados =
      data?.slice(
        (paginaAtual - 1) * itemsPorPagina,
        paginaAtual * itemsPorPagina
      ) || [];

    const totalPaginas = Math.ceil((data?.length || 0) / itemsPorPagina);

    const proximaPagina = () => {
      if (paginaAtual < totalPaginas) {
        setPaginaAtual(paginaAtual + 1);
      }
    };

    const paginaAnterior = () => {
      if (paginaAtual > 1) {
        setPaginaAtual(paginaAtual - 1);
      }
    };
    const irParaPagina = (numPagina: number) => {
      if (numPagina >= 1 && numPagina <= totalPaginas) {
        setPaginaAtual(numPagina);
      }
    };

    const possuiPersonagens = personagensPaginados.length > 0;

    return {
      personagens: personagensPaginados,
      totalPaginas,
      paginaAtual,
      isLoading,
      error,
      proximaPagina,
      paginaAnterior,
      irParaPagina,
      possuiPersonagens,
      refetch,
    };
  };

  const gerarPersonagens = async () => {
    await apiRequest('/swapi');
    listarPersonagens().refetch();
    listarPersonagensPaginado().refetch();
  };

  return { listarPersonagens, listarPersonagensPaginado, gerarPersonagens };
}
