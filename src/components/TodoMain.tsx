import {PackageX} from "lucide-react";
import CreateTodo from "./CreateTodo";
import TodoItems from "./TodoItems";
import ky from "ky";
import {useQueryClient} from "@tanstack/react-query";

const TodoMain = () => {
  const queryClient = useQueryClient();

  const deleteRead = async () => {
    const req = await ky.delete(`http://localhost:5050/todos/read`);

    queryClient.refetchQueries({queryKey: ["todoData"]});
  };

  return (
    <>
      <div className="card w-full bg-white/5 shadow-xl backdrop-blur-sm lg:w-[680px]">
        <div className="card-body space-y-8">
          <CreateTodo />

          <TodoItems />

          <div className="flex w-full items-center justify-end">
            <button
              className="btn btn-ghost btn-error rounded-full text-red-500"
              onClick={deleteRead}
            >
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
