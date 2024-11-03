export default function Header() {
  return (
    <nav className="items-center justify-evenly flex text-indigo-600 font-bold fixed right-16 top-16">
      <ul className="flex flex-col">
        <li className="flex gap-2 items-center">
          <div className="bg-gray-400 w-1 h-6"></div> About
        </li>
        <li className="flex gap-2 items-center">
          <div className="bg-gray-400 w-1 h-6"></div> Experience
        </li>
        <li className="flex gap-2 items-center">
          <div className="bg-gray-400 w-1 h-6"></div> Projects
        </li>
        <li className="flex gap-2 items-center">
          <div className="bg-gray-400 w-1 h-6"></div> Contact
        </li>
      </ul>
    </nav>
  );
}
