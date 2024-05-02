import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="flex items-center sticky top-0 w-dvw h-24 z-50 bg-[#ec2a83]">
        <menu className="flex pl-6">
          <li className="bg-inherit pr-10">
            <a href="/#home" aria-label="Back to top" className="navItem"><i className="fas fa-dragon"></i></a>
          </li>
          <li className="bg-inherit pr-10">
            <Link to="/" className="navItem">Home</Link>
          </li>
          <li className="bg-inherit pr-10">
            <a href="/#profile" aria-label="About section" className="navItem">About</a>
          </li>
          <li className="bg-inherit pr-10">
            <a href="/#projects" aria-label="Projects section" className="navItem">Projects</a>
          </li>
          <li className="bg-inherit pr-10">
            <a href="/#skills" aria-label="Skills and technologies section" className="navItem">Technologies</a>
          </li>
          <li className="bg-inherit pr-10">
            <Link to="../demos" className="navItem">Demos</Link>
          </li>
        </menu>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;
