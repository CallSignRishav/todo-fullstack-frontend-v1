import {TodoDataType} from "@/utils/information";
import {Trash} from "lucide-react";
import {useState} from "react";
import DelTodo from "./DelTodo";
import EditTodo from "./EditTodo";

const SingleTodo = ({todoInfo}: {todoInfo: TodoDataType}) => {
  const [done, setDone] = useState(false);

  return (
    <>
      <div className="flex flex-row items-center justify-between gap-2 rounded-full bg-orange-100 px-2">
        <div className="flex gap-2">
          <div className="flex items-center">
            <input
              onClick={() => setDone(!done)}
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
