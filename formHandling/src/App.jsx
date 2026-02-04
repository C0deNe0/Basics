import { useState } from "react";
function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hello");
    setUserName("");
    setAllUsers(...allUsers, {});
  }

  return (
    <div className="bg-black text-white h-screen w-full flex flex-col items-center justify-center gap-2 ">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-wrap px-2 py-10 justify-center"
      >
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Enter your name here"
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%] "
        />
        <input
          type="text"
          placeholder="Image URL"
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%] "
        />
        <input
          type="text"
          placeholder="Enter Role"
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%] "
        />
        <input
          type="text"
          placeholder="Enter Description"
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%] "
        />

        <button className=" px-5 py-2 text-xl bg-emerald-700 font-semibold cursor-pointer active:scale-95 rounded-lg mt-2  ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
