import Project1 from "../allproject/Project1";

const Page = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  if (id === 'wholesale') {
    return <Project1 />;
  }
};

export default Page;
