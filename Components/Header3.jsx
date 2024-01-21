'use client'
const Header3 = () => {
  return (
    <div className='bg-customgray1 h-64'>

        <div className=' p-10 '>
            <h2 className='text-4xl text-white font-bold text-center'>Over 174,000+ hotels and homes across 35+ countries</h2>
            <div className='grid grid-cols-5 my-6 mx-24 '>
                <input type="text" placeholder='Search... ' className=' h-16 outline-none px-3 text-lg border-r border-gray-400 col-span-2 rounded-l ' />
                <input type="text" placeholder='Search... ' className=' h-16 outline-none px-3 text-lg  border-r border-gray-400 col-span-1'  />
                <input type="text" placeholder='Search... ' className=' h-16 outline-none px-3 text-lg col-span-1' />
                <button type="submit" className='h-16 px-3 py-2 col-span-1 bg-green-500 hover:cursor-pointer hover:bg-green-600 text-white font-normal text-xl rounded-r'>Search</button>
            </div>

      
        </div>
      
    </div>
  )
}

export default Header3
