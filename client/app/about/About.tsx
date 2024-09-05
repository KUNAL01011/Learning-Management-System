import React from 'react'
import { styles } from '../styles/style';

const About = () => {
  return (
    <div className='text-black dark:text-white'>
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>What is <span className='text-gradient'>ELearning?</span></h1>
      <br />
      <div className='w-[95%] 800px:w-[85%] m-auto'>
        <p className='text-[18px] font-Poppins'>
            Are you ready to take your programming skills to the next level? Look no further than Becodemy, the premier programming community dedicated to helping new programmers achieve their goals and reach their full potential.
            <br />
            <br />
            As the founder and CEO of ELearning, I know firsthand the challenges that come with learning and growing in the programming industry. That&apos;s why I created Becodemy - to provide new programmers with the resources and support they need to succeed.
            <br />
            <br />
            Our YouTube channel is a treasure trove of informative videos on everything from programing basics to advanced techniques. But that&apos;s just the beginnning. Our affordable courses are desinged to give you the high-quality education you need to succeed in the industry, without breaking the bank.
            <br />
            <br />
            Are you ready to take your programming skills to the next level? Look no further than Becodemy, the premier programming community dedicated to helping new programmers achieve their goals and reach their full potential.
            <br />
            <br />
            As the founder and CEO of ELearning, I know firsthand the challenges that come with learning and growing in the programming industry. That&apos;s why I created Becodemy - to provide new programmers with the resources and support they need to succeed.
            <br />
            <br />
            Our YouTube channel is a treasure trove of informative videos on everything from programing basics to advanced techniques. But that&apos;s just the beginnning. Our affordable courses are desinged to give you the high-quality education you need to succeed in the industry, without breaking the bank.
        </p>
        <br />
        <span className='text-[22px]'>Kunal Kumar</span>
        <h5 className='text-[18px] font-Poppins'>Founder and CEF of ELearing</h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default About;
