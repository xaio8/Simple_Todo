import CreateTodo from "../../components/todo/CreateTodo";
import TodoList from "../../components/todo/TodoList";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 mt-8 sm:mb-6">
      <CreateTodo />
      <TodoList />
    </div>
  );
};

export default Hero;
