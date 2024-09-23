import {TodoDataType} from "@/utils/information";
import ky from "ky";
import DelTodo from "./DelTodo";
import EditTodo from "./EditTodo";
import {useQueryClient} from "@tanstack/react-query";

const SingleTodo = ({todoInfo}: {todoInfo: TodoDataType}) => {
  const queryClient = useQueryClient();

  const completeRead = async () => {
    if (todoInfo.isCompleted) {
      const req = await ky.patch(
        `http://localhost:5050/todos/read/${todoInfo.id}`,
        {
          json: {isCompleted: false},
        },
      );
    } else {
      const req = await ky.patch(
        `http://localhost:5050/todos/read/${todoInfo.id}`,
        {
          json: {isCompleted: true},
        },
      );
    }

    queryClient.refetchQueries({queryKey: ["todoData"]});
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between gap-2 rounded-full bg-orange-100 px-2">
        <div className="flex gap-2">
          <div className="flex items-center">
            <input
              onClick={completeRead}
              defaultChecked={todoInfo.isCompleted ? true : false}
              // onChange={completeRead}
              type="checkbox"
              className="checkbox-success checkbox p-1"
            />
          </div>

          <div
            className={`text-start text-black ${todoInfo.isCompleted ? "line-through" : ""}`}
          >
            {todoInfo.todoName}
          </div>
        </div>

        <div className="">
          <EditTodo todoId={todoInfo.id} />

          <DelTodo todoId={todoInfo.id} />
        </div>
      </div>
    </>
  );
};

export default SingleTodo;
