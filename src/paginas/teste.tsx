import CartaoPersonagem from '@/components/cartao-personage/cartao-personagem';
import Titulo from '@/components/titulo/titulo';
import { useApiPersonagem } from '@/hooks/useApiPersonagem';

export default function Teste() {
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
    <main className="flex min-h-screen justify-center overflow-hidden">
      {/* Container with perspective */}
      <div className="w-full max-w-11/12 px-6">
        {/* Star Wars style title */}
        <div className="flex justify-center">
          <Titulo texto="Personagens" />
        </div>

        {/* Grid responsivo: 2 colunas em mobile/tablet, 4 em lg */}
        <div className="perspective mt-12">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {personagens?.map((personagem) => (
              <CartaoPersonagem key={personagem.id} personagem={personagem} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
