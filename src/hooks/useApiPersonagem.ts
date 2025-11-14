import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/lib/api-client';
import type { Personagem } from '@/types/personagem';

export function useApiPersonagem() {
  return useQuery({
    queryKey: ['personagens'],
    queryFn: () => apiRequest<Personagem[]>('/personagem'),
  });
}
