import Batalhas from '@/paginas/batalhas';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/batalhas/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Batalhas />;
}
