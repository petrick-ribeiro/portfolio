const Header = () => {
  return (
    <header className="w-full fixed top-0 flex space-x-4 rounded-md p-4 font-bold bg-base">
      <div className="px-2 hover:text-blue">
        <a href="/" className="font-playwrite font-bold">
          Petrick
        </a>
      </div>

      <a href="/skills" className="hover:text-blue">
        Skills
      </a>
      <a href="/projects" className="hover:text-blue">
        Projects
      </a>
      <a href="/about" className="hover:text-blue">
        About
      </a>
    </header>
  );
};

export default Header;
