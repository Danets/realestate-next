import Container from "../ui/Container";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";

interface NavbarProps {
  currentUser?: null;
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
        <Container>
          <div
            className="
            flex 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <Logo />
            <Search />
            <Menu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
