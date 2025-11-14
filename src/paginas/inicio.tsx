import CartaoPersonagem from '@/components/cartao-personage/cartao-personagem';
import Titulo from '@/components/titulo/titulo';
import { useApiPersonagem } from '@/hooks/useApiPersonagem';

export default function Inicio() {
  const { data: personagens, isLoading, error } = useApiPersonagem();

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

  return (
    <>
      <div className="flex justify-center">
        <Titulo texto="Personagens" />
      </div>

      <div className="perspective mt-12">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {personagens?.map((personagem) => (
            <CartaoPersonagem key={personagem.id} personagem={personagem} />
          ))}
        </div>
      </div>
    </>
  );
}
