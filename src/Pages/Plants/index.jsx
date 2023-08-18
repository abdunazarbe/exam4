
import data from '../../db'
import React, { useState } from 'react';
import './style.scss'
import Dropdown from '../../components/Dropdowns'
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';
const index = () => {
    const firstFourItems = data.plants.slice(0, 4);
    const remainingItems = data.plants.slice(4);
    const [showAllCards, setShowAllCards] = useState(false);

    const itemsToShow = showAllCards ? data.plants : data.plants.slice(0, 8);

    const handleSeeMoreClick = () => {


        setShowAllCards(!showAllCards);

    };
    return (
        <div>
            <div className="container">
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
                                to="/plants"
                            >
                                Plants
                            </NavLink>
                        ),
                    },]}
                />
            </div>





            <section>
                <div className="container">



                    <h4 className="decoration-black text-3xl font-medium mt-[20px]">All  Plants</h4>
                    <div className="flex justify-between">
                        <div className="flex mb-4 mt-4 justify-betweem gap-x-[80px] ">
                            <Dropdown />
                        </div>

                        <p className='text-base font-[Inter] mt-4 mb-4 font-normal'>24 items</p>
                    </div>



                    <hr />

                    <div className=" w-full flex flex-wrap gap-x-[65x] justify-between">
                        {firstFourItems.map(item => (
                            <div key={item.id} className="bg-white items-center  hover:shadow-xl pb-[38px] mt-[50px] ">

                                <img src={item.img} alt={item.title} className="w-full mb-2" />
                                <h2 className="text-lg font-medium  mb-2">{item.title}</h2>
                                <p className="text-sm font-medium ">{item.text}</p>
                            </div>
                        ))}
                    </div>



                    <div className=" w-full flex flex-wrap gap-x-[65x] justify-between">
                        {remainingItems.map(item => (
                            <div key={item.id} className="bg-white items-center  hover:shadow-xl pb-[38px]  mt-[50px] ">

                                <img src={item.img} alt={item.title} className="w-full mb-2" />
                                <h2 className="text-lg font-medium  mb-2">{item.title}</h2>
                                <p className="text-sm font-medium ">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    {
                    // <div className=' justify-center ml-[500px] mt-10'>
                    //     <button className="mb-[60px] mt-2 w-[220px] bg-black text-white rounded-sm p-2 hover:bg-green-600"><p className='text-center font-[Inter] font-medium leading-[17px] text-[12px]'>See more</p></button>
                    // </div> */}
                }
                    {!showAllCards && (
                        <div className="justify-center ml-[500px] mt-10">
                            <button className="mb-[60px] mt-2 w-[220px] bg-black text-white rounded-sm p-2 hover:bg-green-600" onClick={handleSeeMoreClick}>
                                <p className="text-center font-[Inter] font-medium leading-[17px] text-[12px]">See more</p>
                            </button>
                        </div>
                    )}
                    {showAllCards && (
                        <div className="w-full flex flex-wrap gap-x-[65x] justify-between">
                            {data. plants.map((item) => (
                                <div key={item.id} className="bg-white items-center mt-[50px] hover:shadow-xl pb-[38px]">
                                    <img src={item.img} alt={item.title} className="w-full mb-2" />
                                    <h2 className="text-lg font-medium mb-2">{item.title}</h2>
                                    <p className="text-sm font-medium ">{item.text}</p>
                               
                                </div>
                    
                          
                                          
                            ))}
                        </div>
                    )} 

                 
                  
                   

                </div>

            </section>
        </div>
    )
}

export default index