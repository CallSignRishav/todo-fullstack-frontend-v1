import {ReactNode} from "react";
import Nav from "./Nav";
import {ubuntu} from "@/utils/fonts";

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <div className={`${ubuntu.className}`}>
        <Nav />
        <main className="mt-20">{children}</main>
      </div>
    </>
  );
};

export default Layout;
