import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userID: "",
    password: "",
  });

  const { userID, password } = formData;

  function handleOnChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (userID && password) {
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/profile");
    }
  }

  return (
    <div className="min-w-screen min-h-screen grid place-items-center">
      <div className="w-11/12 max-w-[400px]">
        <p className="font-poppins text-center font-semibold text-text1">
          Log In To
        </p>
        <img src="/assets/logo.svg" alt="Logo" className="mx-auto my-4 mb-8" />
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col gap-y-4 w-full"
        >
          <input
            type="text"
            placeholder="User ID"
            name="userID"
            value={userID}
            onChange={handleOnChange}
            required
            className="border border-1 border-gray-400 py-2 px-4 rounded-lg w-full focus:outline-4 focus:outline-primary focus:outline-dotted"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleOnChange}
            required
            className="border border-1 border-gray-400 py-2 px-4 rounded-lg w-full focus:outline-4 focus:outline-primary focus:outline-dotted"
          />
          <button className="w-full flex justify-center items-center bg-cta space-x-1 px-6 py-[10px] rounded-full hover:drop-shadow-lg ">
            <p className="font-poppins text-white text-md text-center">
              Log In
            </p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
