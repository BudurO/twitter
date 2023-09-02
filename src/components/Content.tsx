import React from 'react'
import {useParams } from "react-router-dom"
import Side from '../components/Side'
import Navbar from '../components/Navbar'
import axios from 'axios'
type twitterpost={
    post:string,
    id:string
}
function Content() {
  const [Postes, setPostes] = React.useState<twitterpost[]>([])
React.useEffect(()=>{
    axios.get("https://64ee3d821f87218271427022.mockapi.io/twitterpost")
    .then((res)=>{
        setPostes(res.data)
    })
},[])
    const {id} =useParams()
    
    if (id=="likes"){
  return (
    <>
        <div>
        <div className=' flex '>
            <div className=' flex justify-start'>
                <Navbar/>
            </div>
            <div className=' w-2/4 border-r-2 border-slate-100'>
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
                            <img className=' ml-10 mb-10 w-32 h-32  border-solid border-white border-4 rounded-full' src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="" />
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
                        <li role="presentation" className=" w-28 h-14 hover:bg-slate-300 flex justify-center items-center">
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
                        <li role="presentation" className=" w-28 h-14 hover:bg-slate-300 borber border-b-4 border-sky-500 rounded-b-sm flex justify-center items-center">
                            <a
                            href="/profile/likes"
                            className=" text-black font-semibold text-sm"
                            role="tab"
                            aria-selected="false">Likes</a>
                        </li>
                        </ul>
                    </div>
                    {Postes.map((item)=>{
                        return(
                            <h1>hi</h1>
                        )
                    })}
                    
                </div>
            </div>
            <div className='flex justify-end ml-14'>
                <Side/>
            </div>
        </div>
    </div>
    </>
  )
}
}

export default Content