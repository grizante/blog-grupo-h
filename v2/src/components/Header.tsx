import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";

export const Header = () => {
  return (
    <header className="flex items-center justify-center gap-96 h-[9vh] bg-[#02284cd4] w-full shadow[1px_1px_10px_#212121]">
      <div className="flex items-center">
        <Link href="about">
          <Image src="/logo2.png" alt="logo" width={48} height={48} />
        </Link>
        <Link href="about" className="text-3xl">
          TECH NEWS
        </Link>
      </div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Nav className="flex gap-5">
            <NavLink href="#intro">Introdução</NavLink>
            <NavLink href="#chronology">Cronologia</NavLink>
            <NavLink href="#timeline">Linha do Tempo</NavLink>
            <NavLink href="#conclusion">Conclusão</NavLink>
            <NavLink href="#resources">Recursos</NavLink>
            <NavLink href="about">Sobre Nós</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
