import Button from "../../components/Button";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="mx-3 flex flex-col gap-10 min-h-screen text-center">
      <div>
        <Button
          onClick={() => navigate(-1)}
          className="bg-purple-700 text-zinc-50 px-4 py-3 rounded"
        >
          Voltar
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <h1>Ops!</h1>
        <p>Página não encontrada</p>
      </div>
    </section>
  );
}
