import React from "react";
import { useState } from "react";
import "./style.scss";
import Instagram from '../../assets/svgs/instagram.svg'
import Wassup from '../../assets/svgs/wassup.svg'
import Facebook from '../../assets/svgs/facebook.svg'


const index = () => {

    return (
        <footer>
            <div className="container">
                <div className="  h-[270px]  mt-10 mb-0 first-letter:items-center bg-[#F9F9FB]">
                    <ul className=" flex items-center justify-between pt-[10px] mb-[9px] ">
                        <li className="block  ml-[100px]">
                            <ul>
                                <h4 className="font-[Inter] h-[24px]  text-[14px] hover:text-green-400 font-normal leading-6 mb-[18px]">
                                    Title
                                </h4>
                                <p className="text-[12px]   hover:text-green-400 font-medium dkfd leading-6 mb-[17px] ">
                                    +998991234567
                                </p>



                                <li className="flex gap-[20px]">
                                    <img src={Instagram} alt="instagram"className="hover:scale-110" />
                                    <img src={Wassup} alt="wassup" className="hover:scale-110"/>
                                    <img src={Facebook} alt="facebook" className="hover:scale-110"/>
                                </li>
                            </ul>
                        </li>

                        <ul className="gap-[12px] items-start  mt-5 ">
                            <li className=" hover:text-green-400 font-normal leading-6">
                                Help
                            </li>
                            <li className="   hover:text-green-400 font-normal leading-6">
                                Contact us
                            </li>
                            <li className="  hover:text-green-400   font-normal leading-6">
                                Delivery information
                            </li>
                            <li className="  hover:text-green-400   font-normal leading-6">
                                Payment information
                            </li>
                            <li className="   hover:text-green-400   font-normal leading-6">
                                Customer service
                            </li>
                            <li className="  hover:text-green-400  font-normal leading-6">
                                FAQ
                            </li>
                        </ul>

                        <ul className="gap-[12px] items-start mt-5  ">
                            <li className="hover:text-green-400 font-[Inter] h-[24px]  text-[14px] font-normal leading-6 mb-2 ">
                                About us
                            </li>
                            <li className="hover:text-green-400 font-[Inter] h-[24px]  text-[14px] font-normal leading-6 mb-2 ">
                                Our Stores
                            </li>
                            <li className=" hover:text-green-400 font-[Inter] h-[24px]  text-[14px] font-normal leading-6 mb-2 ">
                                Flower care
                            </li>
                            <li className="hover:text-green-400 font-[Inter] h-[24px]  text-[14px] font-normal leading-6 mb-6 ">
                                Site map
                            </li>
                        </ul>

                        <ul className="gap-[12px] items-start  mt-5  ">
                            <li className="font-[Inter] h-[24px] hover:text-green-400  text-[14px] font-normal leading-6  ">Legal</li>
                            <li className="font-[Inter] h-[24px]  hover:text-green-400 text-[14px] font-normal leading-6 ">
                                Privacy policy
                            </li>
                            <li className="font-[Inter] h-[24px]  hover:text-green-400 text-[14px] font-normal leading-6 ">
                                Terms & Conditions
                            </li>
                            <li className="font-[Inter] h-[24px]  hover:text-green-400 text-[14px] font-normal leading-6 ">
                                Cookie policy
                            </li>
                            <li className="font-[Inter] h-[24px]  hover:text-green-400 text-[14px] font-normal leading-6 ">
                                Item 4
                            </li>
                            <li className="font-[Inter] h-[24px]  hover:text-green-400  text-[14px] font-normal leading-6 ">
                                Item 5
                            </li>
                        </ul>
                        <hr />

                    </ul>
                      <hr />
                    <div className="ml-20 mt-6 ">
                         <p className="font-[Inter] text-xs text-{#AFB1BD] font-normal  hover:text-green-400">© Copyright,  SERIUS </p>
                     </div>
                </div>

             




            </div>
        </footer>
    );
};

export default index;


