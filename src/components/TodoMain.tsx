import {PackageX} from "lucide-react";
import CreateTodo from "./CreateTodo";
import TodoItems from "./TodoItems";

const TodoMain = () => {
  return (
    <>
      <div className="card w-full bg-white/5 shadow-xl backdrop-blur-sm lg:w-[680px]">
        <div className="card-body space-y-8">
          <CreateTodo />

          <TodoItems />

          <div className="flex w-full items-center justify-end">
            <button className="btn btn-ghost btn-error rounded-full text-red-500">
              <span>
                <PackageX />
              </span>

              <span>Clear Completed</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoMain;
