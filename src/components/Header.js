import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/authSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SuportedLanguages } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.authSlice);
  const showGpt=useSelector((store) =>store.gptSearch.showGptSearch);

  const dispatch=useDispatch()
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
         dispatch(removeItem())
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        dispatch(removeItem())
        navigate("/error");
      });
  };

  const handleGptSearchClick=()=>{
      dispatch(toggleGptSearchView())
  }

  const onLanguagesChange=(value)=>{
    dispatch(changeLanguage(value))
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      /> 
      {user?.uid && (
        <div className="flex p-2">
        

         {showGpt && <select onChange={(e)=>onLanguagesChange(e.target.value)} className="p-2 bg-gray-900 text-white m-2">

          {SuportedLanguages.map((item)=>( <option value={item.indetifier}>{item.name}</option>))}
          </select>}
          <button className="mx-4 my-2 py-2 px-4 bg-violet-800 text-white rounded-lg" onClick={handleGptSearchClick}>
           {showGpt? "Home Page":"GPT search"}
          </button>
          <img
            className="h-11 w-11"
            src="https://occ-0-2890-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          />
          <button className="font-bold text-white" onClick={handleSignout}>
            sineout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
