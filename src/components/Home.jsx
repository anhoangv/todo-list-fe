import React from "react";
import { useState, useEffect } from "react";
import {getTodos, createTodo, updateTodo, deleteTodo} from "../server/todoApi";


const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  useEffect(()=>{
  getTodos()
  .then(res=>{
    setTodos(res.data);
  })
  .catch(err=>{
    console.log(err);
  });
  },[]);

  const handleAdd = async () => {
  const res = await createTodo({
    title: todo
  });

  setTodos([
    ...todos,
    res.data
  ]);

  setTodo("");
};

  const handleChange = (e) => {
    setTodo(e.target.value);
  };


  const handleDelete = async (e,id)=>{
  await deleteTodo(id);
  setTodos(
    todos.filter(
      item=>item.id !== id
    )
  );
};


  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };


  const handleCheckbox = async(e)=>{
  let id = e.target.name;
  let todo =
  todos.find(
    item=>item.id == id
  );

  const res =
  await updateTodo(
    id,
    {
      completed: !todo.completed
    }
  );

  setTodos(
    todos.map(item=>
      item.id == id
      ? res.data
      : item
    )
  );

};

  return (

      <div className="flex flex-col rounded-xl sm:mt-15 z-10 self-center  h-[92.8vh] sm:h-[550px] w-[97.5vw] sm:w-[35vw] shadow-md shadow-black  overflow-hidden align-middle">
        <div className=" flex justify-center  px-3 py-4 gap-2 ">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className=" bg-white hover:bg-gray-200 text-black w-full text-sm font-semibold py-2.5 px-5  rounded-2xl border-none  sm:hover:shadow-sm shadow-black"
            placeholder="Add a Task . . . "
          />

          <button
            onClick={handleAdd}
            disabled={todo.length <= 3}
            className="cursor-pointer  border-none py-1.5 px- bg-[#03DAC6] hover:bg-[#02c7b5] text-white text-lg  rounded-2xl font-semibold w-[40%]   sm:hover:shadow-sm shadow-black"
          >
            ADD
          </button>
        </div>
        <div
          className="bg-white  h-full  w-full overflow-y-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex justify-end items-center align-middle bg-gray-200  text-sm font-semibold pr-6 sticky top-0 py-2">
            <input
              id="show"
              onChange={toggleFinished}
              type="checkbox"
              checked={showFinished}
            />
            <label className="text-sm font-semibold mb-0.5">
              Show Finished
            </label>
          </div>
          <div className="flex flex-col w-full h-full px-5 py-2.5 mt-2">
            {todos.length === 0 && (
              <div className="flex justify-center text-lg font-semibold text-gray-500 ">
                No Todos To Display
              </div>
            )}
            {todos.map((item) => {
              return (
                (showFinished || !item.isCompleted) && (
                  <div
                    key={item.id}
                    className="flex flex-row  w-full h-max rounded-xl py-2 px-5 bg-gray-300 
                    justify-between mb-3 "
                  >
                    <input
                      name={item.id}
                      type="checkbox"
                      checked={item.isCompleted}
                      onChange={handleCheckbox}
                      className="cursor-pointer mr-1"
                    />

                    <p className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </p>

                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="hover:bg-white rounded-full cursor-pointer p-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        color="#000"
                        fill="none"
                      >
                        <path
                          d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M9.5 16.5L9.5 10.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M14.5 16.5L14.5 10.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
  );
};
export default Home;
