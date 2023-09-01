import React from 'react'

function Side() {
  return (
    <>
    {/* 350 */}
    <div className='flex flex-col mr-14'>
    <div className="pt-2 relative mx-auto text-gray-600 w-[350px]">
        <input className=" bg-[#EFF3F4] h-12 px-12 pr-16 rounded-full text-sm focus:outline-none w-full"
          type="search" name="search" placeholder="Search"/>
        <button type="submit" className="absolute right-0 top-0 mt-6 mr-80">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"> 
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> 
        </svg>
        </button>
      </div>
      <div className='bg-[#EFF3F4] flex flex-col rounded-lg mt-9'>
        <div className='ml-3 mt-3'>
            <h1 className=' font-bold text-xl'>You might like</h1>
            <ul className=' mb-7'>
                <li className='flex mt-5'>
                    <img className=' w-10 h-10 rounded-full' src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="" />
                    <div className='ml-3'>
                        <p className=' font-semibold text-sm'>Google CDC</p>
                        <p className=' text-sm'>@GCDCSaudi</p>
                    </div>
                    <button className=' bg-black text-white rounded-3xl w-20 h-8 text-sm font-semibold ml-24'>Follow</button>
                </li>
                <li className='flex mt-5'>
                    <img className=' w-10 h-10 rounded-full' src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="" />
                    <div className='ml-3'>
                        <p className=' font-semibold text-sm'>Google CDC</p>
                        <p className=' text-sm'>@GCDCSaudi</p>
                    </div>
                    <button className=' bg-black text-white rounded-3xl w-20 h-8 text-sm font-semibold ml-24'>Follow</button>
                </li>
                <li className='flex mt-5'>
                    <img className=' w-10 h-10 rounded-full' src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" alt="" />
                    <div className='ml-3'>
                        <p className=' font-semibold text-sm'>Google CDC</p>
                        <p className=' text-sm'>@GCDCSaudi</p>
                    </div>
                    <button className=' bg-black text-white rounded-3xl w-20 h-8 text-sm font-semibold ml-24'>Follow</button>
                </li>
                <li className=' mt-5'><a href="#" className=' text-sky-500'>Show more</a></li>
            </ul>
        </div>
      </div>
      <div className='bg-[#EFF3F4] flex flex-col rounded-lg mt-9'>
        <div className='ml-3 mt-3'>
            <h1 className=' font-bold text-xl'>What’s happening</h1>
            <ul className=' mb-7'>
                <li className='flex flex-col mt-5'>
                    <p className='text-sm font-light '>Only on Twitter · Trending</p>
                    <p className=' font-semibold text-md text-end mr-5'>يوم_الجمعه#</p>
                    <p className='text-sm font-light '>47.8K posts</p>
                </li>
                <li className='flex flex-col mt-5'>
                <p className='text-sm font-light '>Only on Twitter · Trending</p>
                    <p className=' font-semibold text-md text-end mr-5'>الهلال_الاتحاد#</p>
                    <p className='text-sm font-light '>47.8K posts</p>
                </li>
                <li className='flex flex-col mt-5'>
                    <p className='text-sm font-light '>Only on Twitter · Trending</p>
                    <p className=' font-semibold text-md text-end mr-5'>صلاح_اتحادي_اول_وتالي#</p>
                    <p className='text-sm font-light '>47.8K posts</p>
                </li>
                <li className='flex flex-col mt-5'>
                    <p className='text-sm font-light '>Only on Twitter · Trending</p>
                    <p className=' font-semibold text-md text-end mr-5'>صلاح_اتحادي_اول_وتالي#</p>
                    <p className='text-sm font-light '>47.8K posts</p>
                </li>
                <li className=' mt-5'><a href="#" className=' text-sky-500'>Show more</a></li>
            </ul>
        </div>
      </div>
      </div>
    </>

  )
}

export default Side