import { useRef, useState, useEffect } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, removeItem } from "../utils/authSlice";
import { BG_URL } from "../utils/constants";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    ///onauthstatechange act like event listner. It check if user loggedin and logout and signup
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoUrl} = user;

        dispatch(addItem({ uid: uid, email: email, displayName: displayName,photoUrl:photoUrl }));
        navigate("/browse");
      } else {
        dispatch(removeItem());
        navigate("/");
      }
    });
  }, []);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const ToggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    // validate form data

    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
   
    if (message) return;

    //signin and signup logic

    if (!isSignIn) {
      //signup

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
         

          ////////update username
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://media.licdn.com/dms/image/D5603AQFPzJpa6r2kzQ/profile-displayphoto-shrink_100_100/0/1698045729085?e=1727913600&v=beta&t=pYfoRTRy5uppQbHEtdUQ2-_FaOQHLNXcj5Aly2_MJZw",
          })
            .then(() => {
              const { uid, email, displayName,photoUrl} = auth.currentUser;

              dispatch(addItem({ uid: uid, email: email, displayName: displayName,photoUrl:photoUrl }));
              // Profile updated!
              navigate('/browse')
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
       
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="bakground"/>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute my-32 mx-auto right-0 left-0 p-12 bg-black text-white opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-md bg-gray-800"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-md bg-gray-800"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-gray-800"
        />
        <p className="text-red-500 font-bold p-2">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={ToggleSignIn}>
          {isSignIn ? "New to Netflix? Sinup now" : "Already registred Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
