import CreateTodo from "../components/hero/CreateTodo";
import TodoList from "../components/hero/TodoList";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row md:items-center lg:items-start justify-center gap-8 mt-8 sm:mb-6">
      <CreateTodo />
      <TodoList />
    </div>
  );
};

export default Hero;
