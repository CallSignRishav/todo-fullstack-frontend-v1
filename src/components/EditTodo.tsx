import {Pencil} from "lucide-react";

const EditTodo = ({todoId}: {todoId: string}) => {
  const viewTodo = () => {
    // console.log(todoId);

    const myModal = document.getElementById(
      "edit_todo_modal",
    ) as HTMLDialogElement;

    myModal.showModal();
  };

  return (
    <>
      <button className="btn btn-circle btn-ghost p-0">
        <Pencil onClick={viewTodo} size={20} color="orange" />
      </button>

      <dialog id="edit_todo_modal" className="modal">
        <div className="modal-box flex flex-col items-center gap-8">
          <h3 className="text-xl font-bold">Update Todo</h3>

          <input
            type="text"
            placeholder="What do you need to do?"
            className="input w-full rounded-full border-none bg-orange-100 text-black outline-none focus:border-none focus:outline-none active:border-none active:outline-none"
          />

          <div className="flex gap-5">
            <form method="dialog" className="">
              <button className="btn btn-error px-8 text-lg">Cancel</button>
            </form>

            <button className="btn btn-success px-8 text-lg">Update</button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditTodo;
