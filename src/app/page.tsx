import InputForm from "@/components/custom/InputForm";
import TodoList from "@/components/custom/TodoList";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full p-2">
      <div className="w-full max-w-lvh mx-auto mt-10 rounded-lg p-2 border">
        <h2 className="text-2xl my-3 font-bold text-center">Todo App</h2>
        <div className="mb-4">
          <InputForm />
        </div>
        <div className="mb-4">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
