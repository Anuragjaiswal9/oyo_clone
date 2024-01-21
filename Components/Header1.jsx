import Image from 'next/image'
import Block from './Block'
import {FiArrowUpLeft } from "react-icons/fi";
import { IoCallOutline , IoPersonCircle } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { IoMdPersonAdd } from "react-icons/io";


const Header1 = () => {
  
  return (
    <div className='flex justify-between  items-center h-20 px-10 border-b-2 border-gray-100'>
        <Image src = {'/logo.png'} alt='logo' width={200} height={200} className='w-28 h-28' />
        <div className=' h-full flex'>
        <Block title = {'Become a member'} para = {'Additional 10% off on stays.'} iconComponent ={<IoMdPersonAdd/>} />
        <Block title = {'OYO for buisness'} para = {'Trusted by 5000 corporates.'} iconComponent ={<PiSuitcaseSimpleLight />}/>
        <Block title = {'List your property '} para = {'Start earning in 30 min.'} iconComponent ={<HiOutlineBuildingOffice2/>}/>
        <Block title = {'9161194035'} para = {'Call us to book now.'} iconComponent ={<IoCallOutline />}/>
        
        <div className='flex items-center px-3'>
        <IoPersonCircle className='text-2xl mr-3'/> 
          <h3 className='font-medium'>Login / signup</h3>
        </div>
        </div>

       

      
    </div>
  )
}

export default Header1
PiSuitcaseSimpleLight