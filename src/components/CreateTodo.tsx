const CreateTodo = () => {
  return (
    <>
      <form className="flex w-full">
        <input
          type="text"
          placeholder="What do you need to do?"
          className="input w-full rounded-s-full border-none bg-orange-100 text-black outline-none focus:border-none focus:outline-none active:border-none active:outline-none"
        />

        <button className="btn btn-ghost rounded-e-full bg-green-600 text-lg text-white">
          ADD
        </button>
      </form>
    </>
  );
};

export default CreateTodo;
