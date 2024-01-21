import Image from "next/image"



const Block = ( {title ,  para , iconComponent }) => {
  return (
    <div className='w-52 h-full flex items-center px-3 border-r border-gray-300'>

      
         
      <div alt="demo"  className="  text-2xl rounded-full mr-3"> {iconComponent} </div>
        <div>
            <h3 className="font-medium text-md">{title} </h3>
            <p className="text-gray-500 text-xs line-clamp-1">{para}.</p>
        </div>

        
    </div>
  )
}

export default Block

/*alt="demo" width={200} height={200} className="w-10 h-10 rounded-full mr-5"*/