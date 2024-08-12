import {Trash} from "lucide-react";
import {useState} from "react";

const SingleTodo = () => {
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
            Good Morning Good Morning Good Morning
          </div>
        </div>

        <button className="btn btn-circle btn-ghost p-0">
          <Trash size={20} color="red" />
        </button>
      </div>
    </>
  );
};

export default SingleTodo;
