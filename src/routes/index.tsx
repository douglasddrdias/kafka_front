import { createFileRoute } from '@tanstack/react-router';

import Inicio from '@/paginas/inicio';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return <Inicio />;
}
