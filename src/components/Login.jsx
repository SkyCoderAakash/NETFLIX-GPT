import React,{useState,useRef} from 'react'
import {Link} from 'react-router-dom';
import Header from './Header'
import { validateData } from '../utils/formValidation.js';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import {bgIMG} from '../utils/images.js'

const Login = () => {
  const [SignUp , setSignUp] = useState(false);
  const [error,setError] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUp = ()=>{
    if(SignUp === true){
      setSignUp(false);
    }else{
      setSignUp(true);
    };
  };
  const submitHandle = ()=>{
    if(SignUp===true){
      if(email.current.value && password.current.value){
        const result = validateData(email.current.value,password.current.value);
        if(result){
          setError(result);
        }else{
          setError(null);
          createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL : "WUFYEWGUOFGWXFGWEEFMW"
            }).then(() => {
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid,email,displayName,photoURL}));
            }).catch((error) => {
              setError(error)
            });
          })
          .catch((error) => {
            setError("user already Exist");
          });
        }
      }
      else if(!email.current.value){
        setError("email should empty");
      }else if(!password.current.value){
        setError("password should empty");
      }
    }else if(SignUp===false){
      signInWithEmailAndPassword(auth, email.current.value , password.current.value)
      .then((userCredential) => {
      })
      .catch((error) => {
        setError("invalid input");
      });
    };
  };

  return (
    <div>
      <Header />
       <div className="relative w-full h-screen overflow-hidden">
        <img src={bgIMG} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover"/>
        <div className='flex items-center justify-center h-screen w-full text-white absolute'>
          <form action="" onSubmit={(e)=>{e.preventDefault()}} className='w-[30rem] bg-black bg-opacity-90 rounded-lg px-10 py-5 text-white' >
            <h1 className='font-semibold text-4xl py-7'>{SignUp===true ? "Sign Up" : "Login"}</h1>
            <div>
              {SignUp===true && 
              <input className='px-5 py-1 w-full my-3 h-12 rounded-md outline-none bg-zinc-700 placeholder:text-white' ref={name} type="text" placeholder='Your name' />
              }
            </div>
            <div>
              <input className='px-5 py-1 w-full my-3 h-12 rounded-md outline-none bg-zinc-700 placeholder:text-white' ref={email} type="email" placeholder='Email or phone number' />
            </div>
            <div>
            <input className='px-5 py-1 w-full my-3 h-12 rounded-md outline-none bg-zinc-700 placeholder:text-white' ref={password} type="password" placeholder='Password' />
            </div>
            <p className='text-red-800'>{error}</p>
            <button className='w-full bg-[#d10000] opacity-100 p-2.5 font-semibold my-3 rounded-md' onClick={submitHandle}>{SignUp===true ? "Sign Up" : "Login"}</button>
            <p className='text-stone-400 py-2'>{SignUp===false ? "New to Netflix?" : "Already User"} <Link className='text-white hover:underline' onClick={toggleSignUp}>{SignUp===false ? "Sign Up" : "Login"} now</Link>.</p>
          </form>
        </div>
      </div>   
    </div>
    
  )
}

export default Login