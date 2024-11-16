import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
// Ensure you have this component or replace it with your logo
import Image from 'next/image';
export default function AppNavbar() {
  return (
    //Watch Arcane
    <Navbar shouldHideOnScroll className="h-8 ">
      <Image  
        src="/Kumomi_logo.png"
        alt="Kumomi logo"
        width={100}
        height={30}
        priority
        className="mx-auto flex-items-center ml-2"
      />
      <NavbarBrand>

       
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="">
            Features
          </Link>
        </NavbarItem>
        
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/signin">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

