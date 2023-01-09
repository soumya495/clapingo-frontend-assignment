import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function isLoggedIn() {
    const localData = localStorage.getItem("user");
    return localData !== null;
  }

  function handleLogOut() {
    localStorage.removeItem("user");
    navigate("/");
  }

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/");
    } else {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <div className="min-w-screen min-h-screen grid place-items-center">
      <div className="w-11/12 max-w-[450px]">
        <p className="font-poppins text-center font-semibold text-text1">
          Welcome {user && user?.userID} To
        </p>
        <img src="/assets/logo.svg" alt="Logo" className="mx-auto my-4 mb-8" />
        <div className="flex flex-col gap-y-4 w-full">
          <button
            onClick={handleLogOut}
            className="w-full flex justify-center items-center bg-cta space-x-1 px-6 py-[10px] rounded-full hover:drop-shadow-lg "
          >
            <p className="font-poppins text-white text-md text-center">
              Log Out
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
