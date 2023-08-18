import { Carousel } from 'antd';
import './style.scss'
import arrowRight from '../../../assets/svgs/arrow.svg'

const carousel = () => {

  
  
    return (



        <Carousel autoplay>
            <div className='carousel mt-9  w-full h-auto px-[80px] py-[43px]'>
                <h3 className='text-[28px]'>
                    40% OFF
                </h3>
                <p className='text-[18px] mt-[10px] mb-6'>
                    Best deals this week. Fresh flowers, plants and gifts
                </p>
                <button className='p-3 bg-black flex items-center gap-3 text-white text-sm  hover:bg-green-500'>
                    Shop now
                    <img src={arrowRight} alt="Arrow right icon" />
                </button>
            </div>
            <div className='carousel mt-9 w-full h-auto px-[80px] py-[43px]'>
                <h3 className='text-[28px]'>
                    40% OFF
                </h3>
                <p className='text-[18px] mt-[10px] mb-6'>
                    Best deals this week. Fresh flowers, plants and gifts
                </p>
                <button className='p-3 bg-black flex items-center gap-3 text-white text-sm  hover:bg-green-500'>
                    Shop now <img src={arrowRight} alt="Arrow right icon" />
                </button>
            </div>
            <div className='carousel mt-9 w-full h-auto px-[80px] py-[43px]'>
                <h3 className='text-[28px]'>
                    40% OFF
                </h3>
                <p className='text-[18px] mt-[10px] mb-6'>
                    Best deals this week. Fresh flowers, plants and gifts
                </p>
                <button className='p-3 bg-black flex items-center gap-3 text-white text-sm  hover:bg-green-500'>
                    Shop now
                    <img src={arrowRight} alt="Arrow right icon" />
                </button>
            </div>
            <div className='carousel mt-9 w-full h-auto px-[80px] py-[43px]'>
                <h3 className='text-[28px]'>
                    40% OFF
                </h3>
                <p className='text-[18px] mt-[10px] mb-6'>
                    Best deals this week. Fresh flowers, plants and gifts
                </p>
                <button className='p-3 bg-black flex items-center gap-3 text-white text-sm  hover:bg-green-500'>
                    Shop now
                    <img src={arrowRight} alt="Arrow right icon" />
                </button>
            </div>
        </Carousel>




    );
};

export default carousel;
