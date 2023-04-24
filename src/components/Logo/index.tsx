import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <h1 className="text-2xl text-zinc-50">
      <Link to="/">
        <b>aspira.</b>dev
      </Link>
    </h1>
  );
}
