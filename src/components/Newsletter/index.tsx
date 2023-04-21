import Button from "../Button";
import TextField from "../TextField";

export default function Newsletter() {
  return (
    <section className="flex flex-col gap-6 m-6 p-6 bg-zinc-800/25 rounded-tr-2xl rounded-bl-2xl border border-zinc-800 md:w-[600px] mx-auto">
      <h2>Quer acompanhar minhas postagens?</h2>
      <p>
        Seja notificado de uma nova publicação. Pode cancelar a inscrição quando
        quiser.
      </p>
      <div className="flex gap-3">
        <TextField type="email" placeholder="email@provedor.com.br" />
        <Button className="bg-purple-800 text-zinc-50 px-2 py-3 rounded">
          Enviar
        </Button>
      </div>
    </section>
  );
}
