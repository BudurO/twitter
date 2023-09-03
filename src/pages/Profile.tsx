import React from 'react'
import Side from '../components/Side'
import Navbar from '../components/Navbar'
import axios from 'axios'

type twitterpost={
    post:string,
    like:boolean,
    id:string
}
function Profile() {
    const [Postes, setPostes] = React.useState<twitterpost[]>([])
    const [isActive, setIsActive] = React.useState<boolean>(false);
React.useEffect(()=>{
    axios.get("https://64ee3d821f87218271427022.mockapi.io/twitterpost")
    .then((res)=>{
        setPostes(res.data)
    })
},[])

const likes=(id:string)=>{
    console.log("clicked")
    
        axios.put(`https://64ee3d821f87218271427022.mockapi.io/twitterpost/${id}`,{
            like:true
        })
        .then((res)=>{
            console.log(res.data.like)
            if(isActive==false){
                setIsActive(true)
                console.log(isActive)
        }else
        if(isActive==true){
            setIsActive(false)
                console.log(isActive)
        }
        })
        
    
    
        

}
  return (
    <div>
        <div className=' flex '>
            <div className=' flex justify-start'>
                <Navbar/>
            </div>
            <div className=' w-2/4 border-x-2 border-slate-100'>
                <div className='flex '>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" width={20}>
                        <g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g>
                    </svg>
                    <div className='ml-8'>
                        <div className=' flex'>
                            <h3 className=' font-semibold text-xl'>Amzan</h3>
                            <svg viewBox="0 0 24 24" aria-label="Protected account" role="img" className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr" data-testid="icon-lock" width={20}>
                                <g><path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"></path></g>
                            </svg>
                        </div>
                        <p className=' font-light text-sm text-gray-500'>0 posts</p>
                    </div>
                </div>
                <div className=' h-56'>
                    <div className=' h-52 bg-[#CFD9DD] mt-0 '>
                        <div className='m-0'>
                            <img className=' ml-10 w-32 h-32   border-solid border-white border-4 rounded-full' src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="" />
                        </div>
                    </div>
                    <div className='flex justify-end mt-3 mr-3'>
                        <button className=' text-black rounded-3xl w-32 h-8 text-sm font-semibold  border border-gray-300'>Set up profile</button>
                    </div>
                    <div>
                        <div className='ml-8'>
                            <div className=' flex'>
                                <h3 className=' font-semibold text-xl'>Amzan</h3>
                                <svg viewBox="0 0 24 24" aria-label="Protected account" role="img" className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr" data-testid="icon-lock" width={20}>
                                    <g><path d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"></path></g>
                                </svg>
                            </div>
                            <p className=' font-light text-sm text-gray-500'>@ad__12345</p>
                            <div className='flex font-light text-sm text-gray-500 mt-2'>
                                <svg viewBox="0 0 24 24" aria-hidden="true" className=" text-gray-500 r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr" width={18}>
                                    <g><path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path></g>
                                </svg>
                                <p>Joined February 2017</p>
                            </div>
                            <div className=' flex gap-6 mt-2'>
                                <p>15 <a href="#" className=' font-light text-sm text-gray-500'>Following</a></p>
                                <p>15 <a href="#" className=' font-light text-sm text-gray-500'>Followers</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-36'>
                    <div className="border-b  border-[#EFF3F4] px-3 pt-3  dark:text-neutral-50">
                        <ul
                        className=" flex justify-between  list-none flex-row flex-nowrap border-b-0 pl-0 mb-1"
                        role="tablist"
                        data-te-nav-ref>
                        <li role="presentation" className=" w-28 h-14 hover:bg-slate-300 borber border-b-4 border-sky-500 rounded-b-sm flex justify-center items-center">
                            <a
                            href="/profile/"
                            className=" text-black font-semibold text-sm"
                            role="tab"
                            aria-selected="true">Posts</a>
                        </li>
                        <li role="presentation" className=" w-28 h-14 hover:bg-slate-300 flex justify-center items-center">
                            <a
                            href="#!"
                            className=" text-black font-semibold text-sm"
                            role="tab"
                            aria-selected="false">Replies</a>
                        </li>
                        <li role="presentation" className=" w-28 h-14 hover:bg-slate-300 flex justify-center items-center">
                            <a
                            href="#"
                            className=" text-black font-semibold text-sm"
                            role="tab"
                            aria-selected="false">Highlights</a>
                        </li>
                        <li role="presentation" className=" w-28 h-14 hover:bg-slate-300 flex justify-center items-center">
                            <a
                            href="#"
                            className=" text-black font-semibold text-sm"
                            role="tab"
                            aria-selected="false">Media</a>
                        </li>
                        <li role="presentation" className=" w-28 h-14 hover:bg-slate-300 flex justify-center items-center">
                            <a
                            href="/profile/likes"
                            className=" text-black font-semibold text-sm"
                            role="tab"
                            aria-selected="false">Likes</a>
                        </li>
                        </ul>
                    </div>
                    <div>
                    {Postes.map((item)=>{
                        return(
                            <div key={item.id} className=" border-b-2 border-slate-100  mt-3">
                                <div className='flex justify-between'>
                                <div className="flex justify-start ml-5">
                                    <img className='w-10 h-10 rounded-full' src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="" />
                                    <p className="ml-4 mt-2">Budue</p>
                                </div>
                                <button className="flex justify-end mr-6" >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current inline-block">
                                        <g>
                                            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                                        </g>
                                    </svg>
                                </button>
                                </div>
                                <li className="list-none mt-4 ml-14">{item.post}</li>
                                <li className="flex justify-evenly pt-20 mb-4">
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current inline-block "><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current inline-block "><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>
                                            {/* <div onClick={()=>{likes(item.id)}}>
                                                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current inline-block "><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
                                            </div> */}
                                            <div onClick={()=>{localStorage.setItem("id",item.id), likes(item.id); }}>
                                                
                                                {isActive?<svg  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="w-6 h-6 fill-current inline-block " viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" fill="#d93030"></path> </svg>:<svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current inline-block "><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>}
                                                
                                            </div>
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current inline-block "><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
                                </li>
                            </div>
                        )
                    })}
                    </div>
                    
                    
                </div>
            </div>
            <div className='flex justify-end ml-14'>
                <Side/>
            </div>
        </div>
    </div>
  )
  

}

export default Profile