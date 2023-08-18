import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleCountry() {
  const [flowers, setFlowers] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`/src/db.js/${id}`);
        const data = await res.json();
        setFlowers(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleCountry();
  }, [id]);

  useEffect(() => {
    document.title = `flowers | ${id}`;
  }, [id]);

  return (
    <div className='container'>
      <div className="red_tulips flex gap-[72px] mt-[134px]">

        <div className="red_tulips mt-[50px] ">
          <img src={red_tulips} alt="" />

          <div className='flex gap-[40px] mt-[20px]'>

            <div className='flex w-[142px] gap-[10px] items-center justify-center'>
              <img src={icon1} alt="" />
              <p className='text-[12px]'>Benefits
                description
              </p>
            </div>

            <div className='flex w-[142px] gap-[10px] items-center justify-center'>
              <img src={icon2} alt="" />
              <p className='text-[12px]'>
                Always fresh flowers
              </p>
            </div>

            <div className='flex w-[142px] gap-[10px] items-center justify-center'>
              <img src={icon3} alt="" />
              <p className='text-[12px]'>
                Take photo of bouquet
              </p>
            </div>

          </div>

        </div>

        <div className="red-right mt-[50px]">
          <h2 className='text-[24px] mb-[20px]'>Red Tulips</h2>

          <div className='flex items-center gap-[20px] mb-[15px]'>
            <p className='text-[28px]'>46 $</p>
            <p className='text-[18px] line-through text-[#82828B]'>60 $</p>
          </div>

          <div className='liniya mb-[40px]'>
          </div>

          <p className='text-[18px] mb-[25px]'>Count:</p>

          <div className='flex gap-7 mb-[42px] w-[30px]'>

            <img onClick={() => setCounter((counter) => counter + 1)} className='cursor-pointer' src={plus} alt="" />
            <p className='w-[20px]'>{counter}</p>
            <img onClick={() => setCounter((counter) => counter - 1)} className='cursor-pointer' src={minus} alt="" />

          </div>

          <p className='text-[16px] mb-[20px]'>Color:</p>

          <div className='flex gap-[20px] mb-[54px]'>

            <div className='grey w-[36px] h-[36px] bg-[#F0F0F5] rounded-full cursor-pointer focus:border-2 focus:border-blue-700'>
            </div>

            <div className='grey w-[36px] h-[36px] bg-[#EE7764] rounded-full cursor-pointer focus:border-2 focus:border-blue-700'>
            </div>

            <div className='grey w-[36px] h-[36px] bg-[#FFBC2C] rounded-full cursor-pointer focus:border-2 focus:border-blue-700'>
            </div>

          </div>

          <div className='flex gap-5 mb-[40px]'>

            <button className='bg-[#595CFF] w-[309px] py-[16px] text-white rounded-md hover:bg-cyan-500'>
              Button
            </button>

            <img src={savat} alt="" />

          </div>


          {/* <div>

            <div className='flex justify-between mb-[18px]'>
              <p>Bouquet contents</p>
              <img src={plus2} alt="" />
            </div>

            <div className='liniya'></div>


            <div className='flex justify-between mb-[18px] mt-[18px]'>
              <p>Bouquet contents</p>
              <img src={plus2} alt="" />
            </div>

            <div className='liniya'></div>


            <div className='flex justify-between mb-[18px] mt-[18px]'>
              <p>Bouquet contents</p>
              <img src={plus2} alt="" />
            </div>

            <div className='liniya'></div>

          </div> */}


          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
          <Collapse className='max-w-[515px]' accordion items={items} />




        </div>

      </div>

      <div className='pass mt-[160px]'>


        <div className='flex justify-between mb-[40px]'>
          <p className='text-[24px]'>Similar flowers</p>

          <div className='flex'>
            <img src={arrow_grey} alt="" />
            <img src={arrow_black} alt="" />
          </div>
        </div>

        <div className='flex justify-between'>
          {flowers.map((item, index) => {
            return <Cards state={item} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}
