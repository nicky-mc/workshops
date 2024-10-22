import { ActiveLink } from "./ActiveLink";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <ul className="flex justify-center space-x-8">
        <li>
          <ActiveLink href="/" className="text-white hover:text-gray-300">
            Home
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/fast" className="text-white hover:text-gray-300">
            Fast
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/slow" className="text-white hover:text-gray-300">
            Slow
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/about" className="text-white hover:text-gray-300">
            About
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
}
