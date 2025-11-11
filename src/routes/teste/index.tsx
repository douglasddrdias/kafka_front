import Teste from "@/paginas/teste";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/teste/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Teste />;
}
