import React from "react";
import logo from "./../assets/icons/logo.svg";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Nav = () => {
  return (
    <header>
      <nav className="flex justify-between p-6 md:px-12 lg:px-24">
        <img src={logo} className=" w-[100px] md:w-[150px] lg:w-[191px]" />
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className=" md:space-x-2 lg:space-x-5 text-gray-600">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "lg:text-lg")}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "lg:text-lg")}
              >
                Flashcard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "lg:text-lg")}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "lg:text-lg")}
              >
                FAQ
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Button className="rounded-full lg-text-lg px-8 font-normal bg-gradient-to-b from-[#06286E] to-[#164EC0]">
                  Login
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <HamburgerMenuIcon width={24} height={24} color="#06286E" />
          </SheetTrigger>
          <SheetContent>
            <ul className="grid gap-4 text-lg justify-center text-center">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Flashcard</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <Button className="rounded-full text-lg px-8 font-normal bg-gradient-to-b from-[#06286E] to-[#164EC0]">
                  Login
                </Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Nav;
