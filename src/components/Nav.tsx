import {CircleCheckBig} from "lucide-react";

const Nav = () => {
  return (
    <>
      <div className="navbar fixed top-0 z-10 flex items-center justify-center bg-orange-200">
        <div className="flex items-center text-5xl tracking-wide text-gray-600">
          TO<span className="text-[#16a34a]">D</span>
          <span>
            <CircleCheckBig size={37} strokeWidth={2.8} color="#16a34a" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Nav;
