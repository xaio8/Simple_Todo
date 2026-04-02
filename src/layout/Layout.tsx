import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 dark:bg-gray-700">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
