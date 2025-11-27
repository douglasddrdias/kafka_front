import { useForm } from '@tanstack/react-form';
import { useState } from 'react';
import type { Personagem } from '@/types/personagem';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Titulo from '@/components/titulo/titulo';

interface EditarPersonagemProps {
  personagem?: Personagem;
  onSalvar?: (personagem: Personagem) => void;
}

export default function EditarPersonagem({
  personagem,
  onSalvar,
}: EditarPersonagemProps) {
  const [isSaving, setIsSaving] = useState(false);

  const form = useForm({
    defaultValues: {
      id: personagem?.id || 0,
      nome: personagem?.nome || '',
      altura: personagem?.altura || '',
      peso: personagem?.peso || null,
      corCabelo: personagem?.corCabelo || '',
      anoNascimento: personagem?.anoNascimento || '',
      genero: personagem?.genero || '',
      corPele: personagem?.corPele || '',
      corOlhos: personagem?.corOlhos || '',
      urlImagem: personagem?.urlImagem || '',
    } as Personagem,
    onSubmit: async ({ value }) => {
      setIsSaving(true);
      try {
        if (onSalvar) {
          onSalvar(value);
        }
        console.log('Personagem salvo:', value);
      } catch (error) {
        console.error('Erro ao salvar:', error);
      } finally {
        setIsSaving(false);
      }
    },
  });

  const campoInput = (
    label: string,
    fieldName: keyof Personagem,
    tipo: string = 'text'
  ) => (
    <form.Field
      name={fieldName}
      children={(field) => (
        <div className="space-y-2">
          <label className="block text-sm font-medium">{label}</label>
          <input
            type={tipo}
            name={field.name}
            value={String(field.state.value || '')}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={`Digite ${label.toLowerCase()}`}
          />
          {field.state.meta.errors && (
            <p className="text-sm text-red-500">
              {field.state.meta.errors.join(', ')}
            </p>
          )}
        </div>
      )}
    />
  );

  return (
    <div className="bg-background min-h-screen p-4 md:p-8">
      <Titulo texto={personagem ? 'Editar Personagem' : 'Novo Personagem'} />

      <div className="mx-auto mt-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Dados do Personagem</CardTitle>
            <CardDescription>
              Atualize as informações do personagem
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
              className="space-y-6"
            >
              {/* Nome */}
              {campoInput('Nome', 'nome')}

              {/* Ano de Nascimento */}
              {campoInput('Ano de Nascimento', 'anoNascimento', 'number')}

              {/* Altura */}
              {campoInput('Altura', 'altura')}

              {/* Peso */}
              {campoInput('Peso', 'peso')}

              {/* Cor do Cabelo */}
              {campoInput('Cor do Cabelo', 'corCabelo')}

              {/* Cor dos Olhos */}
              {campoInput('Cor dos Olhos', 'corOlhos')}

              {/* Gênero */}
              {campoInput('Gênero', 'genero')}

              {/* Cor da Pele */}
              {campoInput('Cor da Pele', 'corPele')}

              {/* URL da Imagem */}
              {campoInput('URL da Imagem', 'urlImagem', 'url')}

              {/* Botões de Ação */}
              <div className="flex gap-4 pt-6">
                <Button type="submit" disabled={isSaving} className="flex-1">
                  {isSaving ? 'Salvando...' : 'Salvar'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => form.reset()}
                >
                  Limpar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
