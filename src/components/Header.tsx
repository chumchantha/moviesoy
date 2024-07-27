import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, SearchIcon } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  // {
  //   name: "Recently Added",
  //   href: "/recently-added",
  // },
  {
    name: "Movies",
    href: "/movies",
  },
  // {
  //   name: "Drama",
  //   href: "/drama",
  // },
  // {
  //   name: "Khmer Dubbed",
  //   href: "/khmer-dubbed",
  // },
  // {
  //   name: "My List",
  //   href: "/my-list",
  // },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-30 z-10 shadow-md px-4">
      <nav className="flex justify-between items-center h-16 ">
        {/* Left */}
        <div className="flex gap-2 items-center">
          <Link href="/">
            <img
              width={150}
              height={150}
              src="https://tcfxxukuhohylboawmxo.supabase.co/storage/v1/object/public/logo/Logonetflix.png"
              alt="Logo"
            ></img>
          </Link>

          <ul
            className="flex items-center gap-2
        "
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="search"
            className="hidden md:block text-white bg-black bg-opacity-65 rounded-md w-full py-2 px-3 text-sm focus:outline-none"
            placeholder="Search for movies..."
          />
          <SearchIcon className="w-16" />

          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </header>
  );
};

export default Header;
