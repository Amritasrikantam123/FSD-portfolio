import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ theme, onToggleTheme, children }) {
  return (
    <>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;