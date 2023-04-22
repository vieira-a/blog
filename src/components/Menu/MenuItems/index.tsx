interface MenuItemsProps {
  className?: string;
}

export default function MenuItems({ className }: MenuItemsProps) {
  const menuList = ([] = [
    {
      id: 1,
      name: "Sobre",
    },
    {
      id: 2,
      name: "Projetos",
    },
    {
      id: 3,
      name: "Contato",
    },
  ]);

  return (
    <ul className={className}>
      {menuList.map((item) => (
        <li
          className="hover:text-purple-700 md:hover:text-zinc-900 md:duration-300"
          key={item.id}
        >
          <a href="">{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
