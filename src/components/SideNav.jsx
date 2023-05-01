import React from 'react'
import logo from '../assets/logo.svg'
import { sideNavItems } from '../../constants'

const SideNav = () => {
  return (
    <div className='mx-20 my-3 flex flex-col font-medium text-xl w-1/6'>
      <img src={logo} alt='twitter logo' height={30} width={30} className='hover:bg-[#9fa9b0] rounded-full'/>
      <div>
        {sideNavItems.map((item) => (
          <ul className='my-5' key={item.id}>
            <li className='list-none py-2 px-3 hover:bg-[#9fa9b0] transition rounded-full w-2/4'>
              {item.name}
            </li>
          </ul>
        ))}
      </div>
      more
      <button className=' py-3 bg-[#1d9bef] hover:bg-[#167bbf] transition text-white rounded-full'>Tweet</button>
    </div>
  )
}

export default SideNav
