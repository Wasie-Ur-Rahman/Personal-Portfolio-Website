import React from 'react'

 
    export const Cards= ({ image, link, name, Discription }) => {
        
    
        return (
            <div className=" shadow-lg  shadow-[#36a76e]  bg-[#f7f5f5] scale-95  hover:scale-100 ease-in duration-300 hover:border-[#36a76e]  border-[3px] h-[23rem] w-[21rem] mobile:w-[15rem] mobile:h-[20rem]  rounded-3xl  opacity-90 border-opacity-20 ">
                <a  className='text-black' href={link}  >
                    <div className=" h-2/3 w-5/6 mt-4 mx-auto rounded-2xl ">
                    <img className="object-cover h-4/5 w-full  rounded-2xl scale-95 hover:scale-100 ease-in duration-300" src={image}></img>
                    </div>
                    <div className="space-y-0 flex flex-col   ">
                        <div className=" text-[#22433f]  text-lg font-bold -mt-10  flex flex-row justify-center items-center "><span>{name}</span></div>
                        <div className="text-[#36a76e] text-sm pl-2 flex flex-row mobile:justify-center mobile:items-center mobile:pt-10 mobile:pl-0 mobile:font-bold mobile:hover:text-[#22433f] ">{Discription} </div>
                    </div>
                </a>
            </div>
        );
    };


