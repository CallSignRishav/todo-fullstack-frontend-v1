import {useQuery} from "@tanstack/react-query";
import ky from "ky";
import LoadingSingleTodo from "./LoadingSingleTodo";
import {TodoDataArray} from "@/utils/information";
import SingleTodo from "./SingleTodo";

const TodoItems = () => {
  const {data, isLoading, isFetching, isSuccess, isFetched, isError} = useQuery(
    {
      queryKey: ["todoData"],

      queryFn: async () => {
        const req = await ky.get("http://localhost:5050/todos");

        const res = await req.json();

        return res as TodoDataArray;
      },

      refetchOnWindowFocus: false,
    },
  );

  if (isLoading || isFetching) {
    return (
      <>
        <div className="space-y-3">
          <LoadingSingleTodo />
          <LoadingSingleTodo />
          <LoadingSingleTodo />
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <div className="">Error...</div>
      </>
    );
  }

  if (isFetched && isSuccess) {
    return (
      <>
        <div className="space-y-3">
          {data.map((todo) => {
            return (
              <>
                <SingleTodo key={todo.id} todoInfo={todo} />
              </>
            );
          })}
        </div>
      </>
    );
  }
};

export default TodoItems;
