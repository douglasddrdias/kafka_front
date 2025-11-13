import {
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuItem,
} from '../ui/navigation-menu';
import { Link } from '@tanstack/react-router';
import { Swords, House, Menu as Hamburger } from 'lucide-react';

const Menu = () => {
  return (
    <div className="fixed top-0 left-0 z-9999 h-full w-full p-4">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem className="text-yellow-300">
            <NavigationMenuTrigger className="bg-transparent">
              <Hamburger />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="/" className="flex items-center gap-2">
                      <House />
                      Início
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/teste" className="flex items-center gap-2">
                      <Swords />
                      Batalha
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Menu;
