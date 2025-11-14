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
    <NavigationMenu viewport={true} className="p-4">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Hamburger />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/" className="flex items-center gap-2">
                    <House className="icone" />
                    Início
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="/teste" className="flex items-center gap-2">
                    <Swords className="icone" />
                    Batalha
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
