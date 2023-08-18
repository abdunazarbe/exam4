import React from 'react'
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';
const index = () => {
  return (
    <div className='container'>
          <Breadcrumb className='py-4' items={[
          {
            title: (
              <NavLink
                to="/"
              >
                Home
              </NavLink>
            ),
          },
          {
            title: (
              <NavLink
                to="../../Pages/NoPage"
              >
                NotREADY
              </NavLink>
            ),
          },]}
        />
        <div className="items-center text-center mt-[200px] mb-[200px]">
         <h2 className='text-3xl'>PAGE NOT READY  </h2>
        </div>
       
    </div>
  )
}

export default index;