import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const {
    createUser,
    setUser,
    updateUserInfo,
    success,
    setSuccess,
    error,
    setError,
    googleLogin,
    gitHubLogin,
  } = useContext(AuthContext);
  const [passShow, setPassShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // handle sign up
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const userPhotoUrl = e.target.userphoto.value;

    // password validation
    if (password.length < 6) {
      return setError("at least 6 characters required");
    }
    // create user
    createUser(email, password)
      .then((result) => {
        const signUpedUser = result.user;

        // update user profile
        updateUserInfo(signUpedUser, username, userPhotoUrl)
          .then((result) => {})
          .catch((err) => {
            setError(err.message);
          });
        setUser(signUpedUser);
        e.target.reset();
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // handle google login
  const loginWithGoogle = () => {
    googleLogin()
      .then((result) => {
        const googleLoginUser = result.user;
        setUser(googleLoginUser);
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // handle github login
  const loginWithGithub = () => {
    gitHubLogin()
      .then((result) => {
        const githubLoginUser = result.user;
        setUser(githubLoginUser);
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="w-full md:w-5/6 mx-auto">
      <h2 className="text-center text-2xl font-bold my-5">Sign up</h2>

      <div className="w-full max-w-xs mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
              <span className="text-red-600 font-extrabold"> *</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="username"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              User Email
              <span className="text-red-600 font-extrabold"> *</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="useremail"
              placeholder="Email address"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
              <span className="text-red-600 font-extrabold"> *</span>
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setPassword(e.target.value)}
                type={passShow ? "text" : "password"}
                placeholder="Password"
                name="password"
                required
              />
              <div
                onClick={() => setPassShow(!passShow)}
                className="absolute top-3 right-3"
              >
                {passShow ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </div>
            </div>
            <span className="text-green-600">{success}</span>
            <span className="text-red-600">{error}</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              User Photo
              <span className="font-extrabold"> *</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="userphoto"
              type="text"
              placeholder="http://example.com"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="font-bold text-white bg-[#F65900] text-center  rounded  hover:bg-white hover:text-[#F17228] border hover:border-[#F65900] duration-200 py-2 px-4  focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="flex flex-col gap-3 my-4 font-bold">
            <button
              onClick={loginWithGoogle}
              className="flex justify-center items-center gap-3 border py-2 rounded-md"
            >
              <span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 262"
                  id="google"
                >
                  <path
                    fill="#4285F4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  ></path>
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  ></path>
                </svg>
              </span>
              Continue with Google
            </button>
            <button
              onClick={loginWithGithub}
              className="flex justify-center items-center gap-3 border py-2 rounded-md"
            >
              <span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="github"
                >
                  <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                </svg>
              </span>
              Continue with Github
            </button>
          </div>
          <div className="my-4">
            <p className="inline-block align-baseline font-bold text-sm mr-1 ">
              Already have an account? Please
            </p>
            <Link
              to="/login"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
