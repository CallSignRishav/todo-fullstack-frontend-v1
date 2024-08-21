import {Pencil} from "lucide-react";
import {useRouter} from "next/router";

const EditTodo = ({todoId}: {todoId: string}) => {
  const router = useRouter();

  return (
    <>
      <button className="btn btn-circle btn-ghost p-0">
        <Pencil
          onClick={() => {
            router.push(`/edit/${todoId}`);
          }}
          size={20}
          color="orange"
        />
      </button>
    </>
  );
};

export default EditTodo;
