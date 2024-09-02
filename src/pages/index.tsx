import TodoMain from "@/components/TodoMain";
import Head from "next/head";

const index = () => {
  return (
    <>
      <div className="">
        <Head>
          <title>Everyday Todo</title>
        </Head>

        <div className="my-5 grid place-items-center p-5">
          <TodoMain />
        </div>
      </div>
    </>
  );
};

export default index;
