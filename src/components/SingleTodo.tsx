import {TodoDataType} from "@/utils/information";
import ky from "ky";
import {useState} from "react";
import DelTodo from "./DelTodo";
import EditTodo from "./EditTodo";

const SingleTodo = ({todoInfo}: {todoInfo: TodoDataType}) => {
  const [done, setDone] = useState(todoInfo.isCompleted);

  // const queryClient = useQueryClient();

  const completeRead = async () => {
    setDone(!done);

    // console.log(todoInfo.id);

    const req = await ky.patch(
      `http://localhost:5050/todos/read/${todoInfo.id}`,
      {
        json: {isCompleted: done},
      },
    );

    // queryClient.refetchQueries({queryKey: ["todoData"]});
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between gap-2 rounded-full bg-orange-100 px-2">
        <div className="flex gap-2">
          <div className="flex items-center">
            <input
              onClick={completeRead}
              // checked={todoInfo.isCompleted ? true : false}
              // onChange={completeRead}
              type="checkbox"
              className="checkbox-success checkbox p-1"
            />
          </div>

          <div
            className={`text-start text-black ${done ? "line-through" : ""}`}
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
