import React from "react";

const Login = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0"></div>
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        Login
        <span className="text-blue-500"> Chat App</span>
      </h1>
      <form>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full input input-bordered h-10"
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full input input-bordered h-10"
          />
        </div>
        <a href= "#" className="text-sm hover:underline hover:text-gray-500 mt-2 inline-block">
            Don't have an account?
        </a>
        <div className="p-2">
        <button className="btn btn-outline btn-info">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
