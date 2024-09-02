import {useQueryClient} from "@tanstack/react-query";
import ky from "ky";
import {Trash} from "lucide-react";

const DelTodo = ({todoId}: {todoId: string}) => {
  const queryClient = useQueryClient();

  const removeTodo = async () => {
    const req = await ky.delete(`http://localhost:5050/todos/${todoId}`);

    if (req.status === 200) {
      queryClient.refetchQueries({queryKey: ["todoData"]});
    }
  };

  return (
    <>
      <button className="btn btn-circle btn-ghost p-0" onClick={removeTodo}>
        <Trash size={20} color="red" />
      </button>
    </>
  );
};

export default DelTodo;
