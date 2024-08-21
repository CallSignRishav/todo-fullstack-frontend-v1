import {TodoDataType, TodoFormType, todoSchemaType} from "@/utils/information";
import {zodResolver} from "@hookform/resolvers/zod";
import {useQuery} from "@tanstack/react-query";
import ky from "ky";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";

const slug = () => {
  const router = useRouter();

  const todoId = router.query.slug;

  let todoInp = document.getElementById("todoInp") as HTMLInputElement;

  const {data, isFetching, isLoading, isFetched, isSuccess, isError} = useQuery(
    {
      queryKey: ["updateData"],

      queryFn: async () => {
        const req = await ky.get(`http://localhost:5050/todos/${todoId}`);

        const res = (await req.json()) as TodoDataType;

        return res;
      },
    },
  );

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<TodoFormType>({
    resolver: zodResolver(todoSchemaType),
  });

  const updateNewTodo = async (fData: TodoFormType) => {
    const req = await ky.patch(`http://localhost:5050/todos/${todoId}`, {
      json: fData,
    });

    router.replace("/");
  };

  if (isFetching || isLoading) {
    return (
      <>
        <div className="flex items-center justify-center pt-20">
          <div className="card w-full bg-white/5 shadow-xl backdrop-blur-sm lg:w-[680px]">
            <div className="card-body">
              <div className="text-xl">Loading...</div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (isError) {
    <div className="flex items-center justify-center pt-20">
      <div className="card w-full bg-white/5 shadow-xl backdrop-blur-sm lg:w-[680px]">
        <div className="card-body">
          <div className="text-xl">Error...</div>
        </div>
      </div>
    </div>;
  }

  if (isFetched && isSuccess) {
    return (
      <>
        <div className="flex items-center justify-center pt-20">
          <div className="card w-full bg-white/5 shadow-xl backdrop-blur-sm lg:w-[680px]">
            <div className="card-body">
              <form
                className="flex flex-col items-center gap-8"
                onSubmit={handleSubmit(updateNewTodo)}
              >
                <h3 className="text-xl font-bold">Update Todo</h3>

                <input
                  id="todoInp"
                  type="text"
                  placeholder="What do you need to do?"
                  className="input w-full rounded-full border-none bg-orange-100 text-black outline-none focus:border-none focus:outline-none active:border-none active:outline-none"
                  {...register("todoName")}
                  defaultValue={data.todoName}
                  //   value={data.todoName}
                />

                <span className="text-red-600">{errors.todoName?.message}</span>

                <button type="submit" className="btn btn-success px-8 text-lg">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default slug;
