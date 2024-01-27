import React,{useEffect} from "react";
import { logoutIMG,netflixIMG } from "../utils/images";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleSearch } from "../utils/gptSlice";
import { supportedLanguage } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = ()=>{
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const gpt = useSelector((store)=>store.gpt.showGptSearch);
    const dispatch = useDispatch();

    useEffect(()=>{
        const unsubscrbe = onAuthStateChanged(auth,(user)=>{
          if (user) {
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid,email,displayName,photoURL}));
            navigate('/browse');
          } else {
            dispatch(removeUser());
            navigate('/')
          };
        });
        return ()=> unsubscrbe();
      },[]);

    const ClickHandle = ()=>{
        signOut(auth)
        .then(() => {})
        .catch((error) => {});
    };
    const searchHandle = ()=>{
      dispatch(toggleSearch());
    };
    const languageChange = (e)=>{
      dispatch(changeLanguage(e.target.value));
    };
    return (
      <div className="flex justify-between pt-2 w-full absolute bg-gradient-to-b from-black z-10">
        <img className="w-28 m-4 md:w-36 lg:w-44 sm:m-5 md:m-6 lg:m-8" src={netflixIMG} alt="logo" />
        {user && <div className="flex justify-center items-center mx-2">
          {gpt && <select className="p-1 outline-none border-[3px] bg-black text-white hover:border-[#ff0008] rounded-md" onChange={languageChange}>
            {supportedLanguage.map(lang => <option  key={lang.value} value={lang.value}>{lang.name}</option>)}
          </select>}
          <button className="bg-purple-800 text-white px-3 py-1 rounded m-2 hidden  md:flex lg:flex" onClick={searchHandle}>{gpt ? "Home" :"GPT search"}</button>
          <img className="w-10 h-10 rounded " src={logoutIMG} alt="" />
          <button className="bg-white text-black px-1.5 py-0.5 m-2 mr-2 rounded font-medium" onClick={ClickHandle}>Logout</button>
        </div>}
      </div>
    )
};
export default Header;