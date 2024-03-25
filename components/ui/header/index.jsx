import HeaderLogo from "@/components/ui/header/Logo";
import Nav from "@/components/ui/header/Nav";
import Contact from "@/components/ui/header/Contact";

export default function HeaderStaticIndex() {
  return (
    // md:justify-between
    <header className="mx-auto container-p pt-2 flex items-center justify-between">
      <HeaderLogo />
      <Nav />
      <Contact />
    </header>
  );
}
