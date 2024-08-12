import {TodoFormType, todoSchemaType} from "@/utils/information";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

const CreateTodo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {isSubmitting},
  } = useForm<TodoFormType>({
    resolver: zodResolver(todoSchemaType),
    mode: "all",
  });

  const addTodoFn = async (fData: TodoFormType) => {
    await new Promise((r) => setTimeout(r, 2000));

    console.log(fData);

    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(addTodoFn)}
        className="flex flex-col items-center justify-center gap-1"
      >
        <input
          type="text"
          placeholder="What do you need to do?"
          className="input w-full rounded-full border-none bg-orange-100 text-black outline-none focus:border-none focus:outline-none active:border-none active:outline-none"
          {...register("todoName")}
        />

        <button
          type="submit"
          className={`btn btn-ghost flex items-center justify-center rounded-full bg-green-600 text-lg text-white ${isSubmitting ? "loading loading-spinner" : ""}`}
        >
          {isSubmitting ? "" : "Create Todo"}
        </button>
      </form>
    </>
  );
};

export default CreateTodo;
