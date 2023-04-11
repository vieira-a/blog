import { IoApps } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="bg-purple-800 flex justify-between px-3 py-5 rounded-bl-xl rounded-tr-xl cursor-pointer">
      <a href="/" className="text-2xl text-zinc-50">
        <b>aspira.</b>dev
      </a>
      <button>
        <IoApps className="text-zinc-900 text-2xl" />
      </button>
    </nav>
  );
}
