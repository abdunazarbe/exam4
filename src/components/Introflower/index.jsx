import { Carousel } from 'antd';
import React from 'react';
import arrowRight from '../../assets/svgs/arrow.svg'
import './style.scss'
const intro = () => {
    return (
        <section>
            <div className="container">
                <Carousel autoplay>
                    <div className='carousel  mt-9   w-full h-[482px] px-[80px] py-[43px]'>
                        <h3 className='text-[32px] leading-[38px ] font-medium  font-[Roboto] text-black mt-[120px] '>
                            Title
                        </h3>
                        <p className='text-[18px] font-medium  leading-[22px] mt-[10px] mb-2'>
                        Description
                        </p>
                        <button className='p-3 bg-[#595CFF] mt-[60px] flex items-center gap-3 text-white text-sm   hover:bg-green-500'>
                            Button                          
                            <img src={arrowRight} alt="Arrow right icon" />
                        </button>
                    </div>

                    <div className='carousel  mt-9   w-full h-[482px] px-[80px] py-[43px]'>
                        <h3 className='text-[32px] leading-[38px ] font-medium  font-[Roboto] text-black mt-[120px] '>
                            Title
                        </h3>
                        <p className='text-[18px] font-medium  leading-[22px] mt-[10px] mb-2'>
                        Description
                        </p>
                        <button className='p-3 bg-[#595CFF] mt-[60px] flex items-center gap-3 text-white text-sm   hover:bg-green-500'>
                            Button                          
                            <img src={arrowRight} alt="Arrow right icon" />
                        </button>
                    </div>

                    <div className='carousel  mt-9   w-full h-[482px] px-[80px] py-[43px]'>
                        <h3 className='text-[32px] leading-[38px ] font-medium  font-[Roboto] text-black mt-[120px] '>
                            Title
                        </h3>
                        <p className='text-[18px] font-medium  leading-[22px] mt-[10px] mb-2'>
                        Description
                        </p>
                        <button className='p-3 bg-[#595CFF] mt-[60px] flex items-center gap-3 text-white text-sm   hover:bg-green-500'>
                            Button                          
                            <img src={arrowRight} alt="Arrow right icon" />
                        </button>
                    </div>
                   
                 
                </Carousel>
            
            </div>

        </section>
    );
};

export default intro;