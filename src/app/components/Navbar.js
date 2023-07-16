"use client";
import React from 'react'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useRef } from 'react';

import { Cards } from './Cards';


export default function Navbar() {
  const handleScroll = () => {
    scrollTargetRef.current.scrollIntoView({ behavior: 'smooth'  });
    SetOpen(false)

  };
  const [open ,SetOpen] = useState(false);
  const scrollTargetRef = useRef(null);
 





const router = useRouter()
  return (
    <div className='flex flex-col'>
   
    {
        open ===true ? (
          <div className='flex flex-col w-screen h-screen bg-[#f7f5f5] opacity-80 fixed z-50'>
          <div className='flex flex-col-reverse w-screen h-full justify-center items-center z-20'>
            <div className='flex flex-col  items-center w-80  space-y-9 bg-[#22433f] rounded-xl z-30 shadow-xl shadow-gray-300  '>
            <div className='flex flex-row w-full items-center mt-2  justify-end '>
           
           <button className='mr-2' onClick={(e)=>{SetOpen(false)}}>
             <img  src='/menu3.png' ></img>
           </button>
           </div>
       
           <a className='font-semibold  text-[#f7f5f5]  hover:text-[#a09b9b] hover:animate-pulse' href='#Education' onClick={handleScroll}>Education</a>
           <a className='font-semibold text-[#f7f5f5]  hover:text-[#a09b9b] hover:animate-pulse'  href='#Projects' onClick={handleScroll}>Projects</a>
          <a className='font-semibold text-[#f7f5f5]  hover:text-[#a09b9b] hover:animate-pulse'  href='#Skills'onClick={handleScroll}>Skills</a>
          <a className='font-semibold text-[#f7f5f5]  hover:text-[#a09b9b] hover:animate-pulse'  href='#Achievements'onClick={handleScroll}>Achievements</a>
          <a className='font-semibold text-[#f7f5f5]  hover:text-[#a09b9b] hover:animate-pulse'  href='#Certifications' onClick={handleScroll}>Certifications</a>
          <a className='font-semibold text-[#f7f5f5]  hover:text-[#a09b9b] hover:animate-pulse'  href='#Experience'onClick={handleScroll}>Experience</a>
         
            
           
              </div>
           
          </div>
          </div>
        )
        :
        ( <div className='flex flex-row h-20 w-screen bg-[#f7f5f5] opacity-90 rounded-sm shadow-inner shadow-slate-200 fixed z-50'>
        <div className='flex flex-row h-full w-1/4 items-center justify-center '>
        <a  href='#' className='font-bold text-xl bg-gradient-to-r bg-clip-text text-transparent from-[#22433f] from-50%  to-[#917868] to-50% ...  mobile:ml-4'>Resume</a>
        </div>
        <div className='flex flex-row-reverse w-[1350px]  folding_mobile:hidden mobile:hidden tablet:hidden '>
        <div className=' flex flex-row w-3/4 justify-evenly items-center tablet_large:w-11/12 '>
          <a className='font-semibold  text-[#22433f]  hover:text-[#36a76e] hover:animate-pulse ' href='#Education'   onClick={handleScroll}>Education</a>
          <a className='font-semibold text-[#22433f]  hover:text-[#36a76e] hover:animate-pulse'   href='#Projects' onClick={handleScroll}>Projects</a>
          <a className='font-semibold text-[#22433f]  hover:text-[#36a76e] hover:animate-pulse'  href='#Skills' onClick={handleScroll}>Skills</a>
          <a className='font-semibold text-[#22433f]  hover:text-[#36a76e] hover:animate-pulse'  href='#Achievements' onClick={handleScroll}>Achievements</a>
          <a className='font-semibold text-[#22433f]  hover:text-[#36a76e] hover:animate-pulse'  href='#Certifications' onClick={handleScroll}>Certifications</a>
          <a className='font-semibold text-[#22433f]  hover:text-[#36a76e] hover:animate-pulse'  href='#Experience' onClick={handleScroll}>Experience</a>
        </div>
        </div>
        <div className='flex flex-row-reverse  w-[500px] min-h-fit tablet_large:hidden desktops:hidden laptops:hidden 4k_screens:hidden '>
          <div className='flex items-center justify-center mobile:mr-2'>
          <button onClick={(e)=>{SetOpen(!open)}}><img src='./menu1.png'></img></button>
          </div>
        </div>
      
        
      </div>)
      }

<section id="Education" ref={scrollTargetRef} class="  flex flex-row h-screen mobile:h-[1000px] w-screen bg-[#22433f]  ">
   <div className='flex flex-col h-full w-2/5   mobile:w-full tablet:w-full laptops:w-full tablet_large:w-full justify-center items-end bg-slate-80'>
    <div className='flex flex-col h-full w-3/4  mobile:w-full tablet:w-full tablet:mt-0 mobile:mt-0 tablet_large:w-full laptops:w-full laptops:justify-center laptops:items-center justify-center tablet:justify-start tablet_large:justify-center tablet_large:items-center tablet_large:mt-0 mobile:justify-start mobile:items-center tablet:items-center tablet:space-y-4 space-y-5 mt-10' >
    <p className=' animate-fade-right  animate-ease-in-out animate-duration-1000 text-4xl font-bold text-[#36a76e] mobile:mt-32 tablet:mt-32 mobile:text-2xl tablet:text-2xl'>Hello, its me</p>
   <br/>
   <p className='text-5xl font-bold animate-fade-right   animate-ease-in-out animate-delay-700 animate-duration-1000 text-[#f7f5f5] tablet:text-3xl mobile:text-3xl'>Wasie Ur Rahman</p>
   <br/>

   <div className='z-0 flex rounded-3xl border-[3px] border-[#17ff8b] justify-center w-1/4 animate-fade-right  animate-ease-in-out animate-duration-1000  animate-delay-1000 laptops:hidden desktops:hidden tablet_large:hidden 4k_screens:hidden '>
      <img className='' src='/Alpha1.png'>
        
      </img>
     
     
      </div>
      <br/>
   <p className='text-4xl font-bold text-[#36a76e] animate-fade-right   animate-ease-in-out animate-delay-[1200ms] animate-duration-1000 tablet:text-2xl mobile:text-2xl'>And Im a Se Graduate</p>
   <br/>
   <p className='text-lg font-bold text-[#36a76e] animate-fade-right   animate-ease-in-out animate-delay-[1800ms] animate-duration-1000 tablet:text-sm mobile:text-sm'>Graduated from Ss Case It with a Cgpa of 3.6 in Bsse</p>
   <br/>
   <div className='flex flex-row max-h-fit max-w-fit space-x-10  animate-fade-right mobile:space-x-12   animate-ease-in-out animate-delay-[2200ms] animate-duration-1000'>
   <a className='flex rounded-full h-10 w-10  border-[#36a76e] border-[3px] justify-center items-center animate-wiggle-more animate-infinite' href="mailto:wasieurrahman24@gmail.com"> 
   <img src='/mail.png'></img>
   </a>
   <a className='flex rounded-full h-10 w-10  border-[#36a76e] border-[3px] justify-center items-center animate-wiggle-more animate-infinite' href="https://www.linkedin.com/in/wasie-ur-rahman/"> 
   <img src='/linkedin.png'></img>
   </a>
   <a className='flex rounded-full h-10 w-10  border-[#36a76e] border-[3px] justify-center items-center animate-wiggle-more animate-infinite' href="tel:+923006368004"> 
   <img src='/phone1.png'></img>
   </a>
   <a className='flex rounded-full h-10 w-10  border-[#36a76e] border-[3px] justify-center items-center animate-wiggle-more animate-infinite' href="https://github.com/Wasie-Ur-Rahman"> 
   <img src='/github1.png'></img>
   </a>
   <br/>
   <br/>
   <br/>
   </div>
   <div className='flex flex-row max-h-fit w-72  justify-center  animate-fade-right   animate-ease-in-out animate-delay-[2600ms] animate-duration-1000'>
   <a className='flex rounded-xl h-12 w-52 bg-[#17ff8b] text-[#22433f]  text-lg font-bold justify-center items-center shadow-md bg-opacity-95 shadow-[#6dffb6]  hover:bg-[#6dffb6] ' href='/Wasie_Ur_Rahman_Resume.pdf'
   download> 
   Download Resume
   </a>
   </div>
    </div>
  
   </div>
    <div className='flex flex-col h-full w-3/5   justify-center items-center bg-slate-80  animate-fade-right   animate-ease-in-out animate-delay-[3000ms] animate-duration-1000 mobile:hidden tablet:hidden'>

      <div className='flex rounded-3xl border-[3px] border-[#17ff8b] justify-center w-3/5   '>
      <img  src='/Alpha1.png'>
        
      </img>
     
     
      </div>
   
      </div>
      
     
</section>

<section id="Projects"  ref={scrollTargetRef} class=" h-screen mobile:h-[2000px] tablet:h-[2000px] 4k_screens:h-[1000px] tablet_large:h-[1200px] laptops:h-[1200px] bg-[#22433f] border border-[#36a76e] ">
  <div className='flex h-72 flex-row w-screen  justify-center items-center space-x-1'>
  <span className='text-5xl font-bold  text-[#36a76e] animate-ease-in-out animate-rotate-x animate-infinite mobile:text-3xl '>Top</span>
  <span className='text-5xl font-bold  text-[#f7f5f5] animate-ease-in-out animate-rotate-x animate-infinite mobile:text-3xl'>Projects</span>
  </div>
  <div className='flex flex-col justify-center  tablet_large:items-start items-center   '>
  <div className='flex w-full    justify-evenly max-h-fit  tablet_large:w-full  '>
    <div className='grid grid-cols-4 gap-9   tablet_large:space-x-2 mobile:hidden tablet:grid-cols-1 tablet_large:grid-cols-2 laptops:grid-cols-2 desktops:grid-cols-2'>
    <Cards image={"/nfto.jpg"} name={"Nft Marketplace"} Discription={"Developed a Next.js website using React, JSX, IPFS, Solidity-based ERC-721 contracts, Firebase, Tailwind CSS, and the Goerli faucet. The site includes minting, selling, and listing functionalities for NFTs, with a futuristic design and responsive layout."} ></Cards> 
    <Cards image={"/Hr.jpg"} name={"Hr Management System"} Discription={"Developed a website using Next.js, React framework, JSX, Tailwind CSS, and Supabase as the back-end. The website includes features such as admin-created appraisal sessions, employee answers, employee registration, departmental information, and more."}></Cards> 
    <Cards image={"/funds.jpg"} name={"Fundraising Website"} Discription={"Developed a fundraising website using React, JSX, Bootstrap, and MongoDB. The website includes features like donating to fundraisers, receiving notifications, setting up recurring donations, and creating personal fundraisers."}></Cards> 
    <Cards image={"/blood.jpg"} name={"Blood Bank Management"} Discription={"Developed a Blood Bank Management System using C# and Windows Forms. The system includes two roles: Admin and User. The Admin can save, edit, and delete users, while the User can manage patients, donors, blood stock, blood donation, and blood transfer."}></Cards> 
   
   
  </div>
  <div className='grid gap-28 grid-cols-1 tablet_large:hidden laptops:hidden desktops:hidden 4k_screens:hidden tablet:hidden'>
    <Cards image={"/nfto.jpg"} name={"Nft Marketplace"} link={"https://github.com/Wasie-Ur-Rahman/NFT-Marketplace"} Discription={"Click for Details"} ></Cards> 
    <Cards image={"/Hr.jpg"} name={"Hr Management System"} link={"https://github.com/Wasie-Ur-Rahman/Hr-Management-System-Intern-Project-"} Discription={"Click for Details"} ></Cards> 
    <Cards image={"/funds.jpg"} name={"Fundraising Website"} link={"https://github.com/Wasie-Ur-Rahman"} Discription={"Click for Details"} ></Cards> 
    <Cards image={"/blood.jpg"} name={"Blood Bank Management"} link={"https://github.com/Wasie-Ur-Rahman"}  Discription={"Click for Details"} ></Cards> 
   
   
  </div>
  </div>
  </div>

</section>

<section id="Skills"  ref={scrollTargetRef} class="h-screen  bg-[#22433f] border tablet:h-[1400px] mobile:h-[1200px] desktops:h-[900px] 4k_screens:h-[1150px] border-[#36a76e] ">
<div className='flex h-72 flex-row w-screen  justify-center items-center space-x-1'>
  <span className='text-5xl font-bold  text-[#36a76e] animate-ease-in-out animate-rotate-x animate-infinite from-[#36a76e] text-transparent  bg-gradient-to-r bg-clip-text from-50% to-[#f7f5f5] to-50%   mobile:text-3xl'>Skills</span>
  </div>
  <div className='flex flex-col justify-center  w-screen items-center   '>

    
  <div className='grid gap-10 mobile:gap-44 grid-cols-2 tablet:grid-cols-1 tablet:w-full tablet:gap-44  mobile:grid-cols-1 4k_screens:w-full tablet_large:w-full laptops:w-full desktops:w-full mobile:w-full '>
 
   <img  src='sk1.png'></img>
   <img src='sk2.png'></img>
 
 


  </div>
  </div>

  
  
</section>

<section id="Achievements"  ref={scrollTargetRef} class="h-screen bg-[#22433f] border-[#36a76e] mobile:h-[1000px] laptops:h-[1000px] tablet_large:h-[1100px] tablet:h-[1000px] border">
<div className='flex h-72 flex-row w-screen  justify-center items-center space-x-1'>
  <span className='text-5xl font-bold  text-[#36a76e] animate-ease-in-out  animate-infinite from-[#36a76e] text-transparent  bg-gradient-to-r bg-clip-text from-50% to-[#f7f5f5] to-50% animate-rotate-x  mobile:text-3xl '>Achievements</span>
  </div>
 <div  className='w-full  h-3/4 flex-col flex justify-center  mobile:-mt-28  tablet:-mt-32 tablet_large:-mt-28 laptops:-mt-20  '><div className=' space-y-5 animate-moving w-3/6 h-2/4 laptops:h-3/5 mobile:h-4/5 tablet:h-3/4 tablet_large:h-3/4 flex flex-col  shadow-lg shadow-[#36a76e] border-[#36a76e] rounded-3xl  border-[3px]    items-center'>
  <div className='flex flex-col items-center h-3/5 justify-center space-y-5'>
  <span className='text-2xl text-[#36a76e] font-bold opacity-75 font-outline-2 text-transparent mobile:text-xl  '>ACADEMIC HIGH DISTINCTION & SCHLORSHIPS</span>
 <span className='text-xl text-[#36a76e] font-bold opacity-75 mobile:text-lg  '>From Sep 2019 - June 2023</span>
 <span className='text-xl text-[#36a76e] font-bold opacity-75 mobile:text-lg  '>4-Time High Distinction and Scholarship
for securing GPA above 3.7</span>
</div>
<div className='flex flex-col h-full  justify-evenly  -mt-10'>
<span className='text-lg text-[#36a76e] font-bold opacity-75   font-outline-2 text-transparent mobile:text-base  '>Fall-19</span>
<span className='text-lg text-[#36a76e] font-bold opacity-75  font-outline-2 text-transparent  mobile:text-base'>Fall-20</span>
<span className='text-lg text-[#36a76e] font-bold opacity-75 font-outline-2 text-transparent mobile:text-base'>Spring-21</span>
<span className='text-lg text-[#36a76e] font-bold opacity-75 font-outline-2 text-transparent mobile:text-base'>Spring-22</span>
</div>
 </div></div>
</section>

<section id="Certifications"  ref={scrollTargetRef} class="h-screen bg-[#22433f] mobile:h-[1800px] tablet:h-[1800px] desktops:h-[1000px] 4k_screens:h-[1000px] border-[#36a76e]">
<div className='flex h-72 flex-row w-screen  justify-center items-center space-x-1'>
  <span className='text-5xl font-bold  text-[#36a76e] animate-ease-in-out  animate-infinite from-[#36a76e] text-transparent  bg-gradient-to-r bg-clip-text from-50% to-[#f7f5f5] to-50%  animate-rotate-x  mobile:text-3xl '>Certifications</span>
  </div>
  <div className='flex flex-col h-full w-full  items-center justify-center ' >
  <div className='flex flex-col h-full w-4/5  items-center  '>
    <div className='grid  grid-cols-2 gap-40 mobile:grid-cols-1 tablet:grid-cols-1  '>

      <div className='rounded-2xl h-48 w-72 mobile:w-[270px] bg-[#f7f5f5] opacity-80    flex flex-col justify-evenly  items-center'>
        <img src='./ml.png'></img>
        <span className='text-xl text-[#22433f]'>Machine Learning</span>
        <a className='text-xl text-[#22433f] font-bold hover:text-[#36a76e]' href='https://confirm.udacity.com/S7CSZFC6'>Click me</a>
      </div>
      <div className='rounded-2xl h-48 w-72 mobile:w-[270px]  bg-[#f7f5f5] opacity-80   flex flex-col justify-evenly items-center'>
        <img src='./dst.png'></img>
        <span className='text-xl text-[#22433f]'>Data Science Tools</span>
        <a className='text-xl text-[#22433f] font-bold hover:text-[#36a76e]' href='https://courses.cognitiveclass.ai/certificates/088fd50638394c908ef87f8d3fcd578a'>Click me</a>
      </div>
      <div className='rounded-2xl h-48 w-72 mobile:w-[270px]  bg-[#f7f5f5] opacity-80   flex flex-col justify-evenly items-center'>
        <img src='./Ds.png'></img>
        <span className='text-xl text-[#22433f]'>Introduction to Data Science</span>
        <a className='text-xl text-[#22433f] font-bold hover:text-[#36a76e]' href='https://courses.cognitiveclass.ai/certificates/5388fbfa649149b2b32b121206d01b25'>Click me</a>
      </div>
      <div className='rounded-2xl h-48 w-72  mobile:w-[270px] bg-[#f7f5f5] opacity-80   flex flex-col justify-evenly items-center'>
        <img src='./dsa.png'></img>
        <span className='text-xl text-[#22433f]'>Data Analysis with Python</span>
        <a className='text-xl text-[#22433f] font-bold hover:text-[#36a76e]' href='https://courses.cognitiveclass.ai/certificates/93fa452fd66340648e16f95e59762db4'>Click me</a>
      </div>
    </div>
  </div>
  </div>
</section>

<section id="Experience"  ref={scrollTargetRef} class="h-screen bg-[#22433f] border border-[#36a76e] 4k_screens:h-[900px] mobile:h-[1000px] tablet:h-[800px] laptops:h-[800px] desktops:h-[800px] ">
<div className='flex h-72 flex-row w-screen  justify-center items-center space-x-1'>
  <span className='text-5xl font-bold  text-[#36a76e] animate-ease-in-out  animate-infinite from-[#36a76e] text-transparent  bg-gradient-to-r bg-clip-text from-50% to-[#f7f5f5] to-50%  animate-rotate-x  mobile:text-3xl'>Experience</span>
  </div>
  <div className='flex flex-col w-screen  justify-center items-center  '>
    <div className='flex flex-col w-3/4  h-4/5 items-center  border-[#36a76e]  space-y-10 rounded-3xl border-[3px]  '>
      
      <div className='flex  w-1/3 flex-col mt-10 mobile:w-2/4'><img src='/careq.png'></img>
      </div>
      <span className='text-[#36a76e] text-2xl font-bold mobile:text-xl'>Care pvt ltd</span>
      <span className='text-[#36a76e] text-xl mobile:text-lg font-bold'>June 25th - October 1st (2022)</span>
      <ul className='list-disc mobile:list-none tablet:list-none text-[#36a76e] text-base space-y-5'>
      <li className=' '>Worked as a Front-End developer on HR Management System</li> <li>Where I
developed the front end using Tailwind Css and Next.js</li> <li>Also worked on
developing the backend using Supabase</li> <li>The end product was deployed on
vercel</li></ul>
      </div>
      <div className='flex flex-col '> </div>
  </div>
</section>
<div className='flex flex-row h-32 w-full bg-[#36a76e] '>
<div className='flex flex-row w-full h-full justify-evenly items-center'>
<span className='text-[#22433f] text-xl font-bold mobile:text-lg'>Contact me at :</span>

   <a className='flex rounded-full h-10 w-10  border-[#22433f] border-[3px] justify-center items-center  scale-95 animate-infinite hover:scale-100 animate-wiggle-more ' href="mailto:wasieurrahman24@gmail.com"> 
   <img src='/mail.png'></img>
   </a>
   <a className='flex rounded-full h-10 w-10  border-[#22433f] border-[3px] justify-center items-center  scale-95 animate-infinite hover:scale-100 animate-wiggle-more' href="https://www.linkedin.com/in/wasie-ur-rahman/"> 
   <img src='/linkedin.png'></img>
   </a>
   <a className='flex rounded-full h-10 w-10  border-[#22433f] border-[3px] justify-center items-center scale-95 animate-infinite hover:scale-100 animate-wiggle-more ' href="tel:+923006368004"> 
   <img src='/phone1.png'></img>
   </a>
   <a className='flex rounded-full h-10 w-10  border-[#22433f] border-[3px] justify-center items-center animate-infinite scale-95   hover:scale-100  animate-wiggle-more  ' href="https://github.com/Wasie-Ur-Rahman"> 
   <img src='/github1.png'></img>
   </a>
   
   </div>

</div>
</div>
  
  )
}
 