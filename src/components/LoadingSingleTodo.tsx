import {Trash} from "lucide-react";

const LoadingSingleTodo = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between gap-2 rounded-full bg-orange-100 px-2">
        <div className="flex gap-2">
          <div className="skeleton flex h-7 w-7 items-center rounded-full"></div>

          <div className="skeleton w-80 rounded-lg text-start text-black"></div>
        </div>

        <button className="btn btn-ghost rounded-full"></button>
      </div>
    </>
  );
};

export default LoadingSingleTodo;
