import Navbar from "../components/Navbar";
import Imgtwitter from '../assets/imgtwitter.jpg'
import React from "react";
import axios from "axios";
import Side from "../components/Side";

type Iposttwitter ={
post : string;
id?: string,
like: boolean
}
function Home() {
const [posttwitter,setposttwitter] = React.useState<Iposttwitter>({
    post: "",
    like: false
});

const [Mytwitter,setMytwitter] = React.useState<Iposttwitter[]>([]);

const Mypos = () =>{
    
    axios
    .post("https://64ee3d821f87218271427022.mockapi.io/twitterpost",{
        post: posttwitter.post,
        like: posttwitter.like,
        
    })
    .then((res) =>{
        console.log(res);
        setMytwitter([res.data,...Mytwitter])

    })

};

React.useEffect(()=>{
    axios
.get("https://64ee3d821f87218271427022.mockapi.io/twitterpost")
.then((res) =>{
    setMytwitter(res.data.reverse()),
    console.log(res);

}
)

}

,[])

const deletePost = (id: string | undefined) =>{
    axios.delete(`https://64ee3d821f87218271427022.mockapi.io/twitterpost/${id}`)
    .then(()=>{
    setMytwitter(
        Mytwitter.filter((deleteMytwitter) => {
                return deleteMytwitter.id !== id;
            })
        );
    });
    console.log(id);
    
};
return (
    <>

<div
id="view"
className="h-full w-screen flex flex-row"
>    
<Navbar/>

<h1 className='font-bold text-xl pl-4'>Home</h1>

<div className='pt-14'>

<div className='flex justify-between w-full border-b-2 border-slate-100'>

<div className='hover:border-b-4 hover:border-sky-600'>
    <h1 className=''>For you</h1>
</div>

<div className=' hover:border-b-4  hover:border-sky-600	'>
    <h1>Following</h1>
</div>


</div>
<div className="flex flex-col">
<div className='flex pr-2'>
<img className='w-10 h-10 rounded-full mt-4' src={Imgtwitter} alt="" />
    <input onChange={(e) =>{
        setposttwitter({...posttwitter, post:e.target.value});
    }} 
    type="text"  className='w-96  px-4 h-20 ml-4' placeholder='What is happening?!'
    />
    </div>
<div className='flex items-end justify-end border-b-2 border-slate-100 mb-4'>
<button onClick={Mypos} className='button-twitter-post rounded-full text-white py-1 px-5 mt-4 mb-4'>Post</button>
</div>
<div>

    {Mytwitter.map(item => (
    <div key={item.id} className="mb-9  border-b-2 border-slate-100 ">
<div className="flex justify-start">
<img className='w-10 h-10 rounded-full' src={Imgtwitter} alt="" />
<p className="ml-4 mt-2">Budue</p>
</div>
<button className="flex justify-end ml-96" onClick={() => deletePost(item.id)}>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current inline-block"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
        </button>
        <li className="list-none mt-4">
            {item.post}
        </li>
       
        <li className="flex justify-evenly pt-20 mb-4">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current inline-block "><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current inline-block "><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current inline-block "><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current inline-block "><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
        </li>
       
    </div>
))}
</div>
</div>
</div>

<div className='flex justify-end ml-32 border-l-2 border-slate-100'>
<Side/>
</div>
</div>


    </>
  )
}

export default Home