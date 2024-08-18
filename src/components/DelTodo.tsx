import {useQueryClient} from "@tanstack/react-query";
import ky from "ky";
import {Trash} from "lucide-react";

const DelTodo = ({todoId}: {todoId: string}) => {
  const queryClient = useQueryClient();

  const modalFn = () => {
    const myModal = document.getElementById("my_modal_2") as HTMLDialogElement;

    myModal.showModal();
  };

  const removeTodo = async () => {
    const req = await ky.delete(`http://localhost:5050/todos/${todoId}`);

    if (req.status === 200) {
      queryClient.refetchQueries({queryKey: ["todoData"]});
    }
  };

  return (
    <>
      <button className="btn btn-circle btn-ghost p-0" onClick={modalFn}>
        <Trash size={20} color="red" />
      </button>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box flex flex-col items-center gap-8">
          <h3 className="text-xl font-bold">Are you sure?</h3>

          <div className="flex gap-5">
            <form method="dialog" className="">
              <button className="btn btn-success px-8 text-lg">No</button>
            </form>

            <button
              className="btn btn-error px-8 text-lg"
              onClick={() => {
                removeTodo();
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DelTodo;
