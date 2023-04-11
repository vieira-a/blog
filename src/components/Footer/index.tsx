import Logo from "../Logo";
import MenuItems from "../Menu/MenuItems";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 text-center py-9 border-t-2 border-zinc-800">
      <Logo />
      <MenuItems className="flex gap-6 px-2 py-6 justify-center text-zinc-50" />
      <p>&copy; 2023. Todos os direitos reservados.</p>
    </footer>
  );
}
