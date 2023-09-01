import Navbar from "../components/Navbar";
import Imgtwitter from '../assets/imgtwitter.jpg'
import React from "react";
import axios from "axios";

type Iposttwitter ={
post : string;
}
function Home() {
// const [posttwitter,setposttwitter] = React.useState([])({
//     post:
// });

// const Mypos = () =>{
//     React.useEffect(() =>{
//     axios.get(`https://64ee3d821f87218271427022.mockapi.io/twitterpost`).then((res) =>{
//         setposttwitter(res.data)
//     })
// },[]);
// if (!posttwitter) return null
// }
return (
    <>

<div
id="view"
className="h-full w-screen flex flex-row"
>    
<Navbar/>

<h1 className='font-bold text-xl pl-4'>Home</h1>

<div className='pt-14'>

<div className='flex justify-around w-96'>

<div className='hover:border-b-4 hover:border-sky-600	 '>
    <h1 className=''>For you</h1>
</div>

<div className=' hover:border-b-4  hover:border-sky-600	'>
    <h1>Following</h1>
</div>


</div>
<div className="flex flex-col">
<div className='flex pr-2'>
<img className='w-10 h-10 rounded-full mt-4 mx-4' src={Imgtwitter} alt="" />
    <input   type="text"  className='w-96  px-4 h-20' placeholder='What is happening?!'/>
    </div>
<div className='flex items-end justify-end pl-60'>
<button  className='button-twitter-post rounded-full text-white py-1 px-5 mt-4'>Post</button>
</div>
<div>
</div>
</div>
</div>


</div>
    </>
  )
}

export default Home