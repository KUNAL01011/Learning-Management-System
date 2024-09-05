'use client';
import Loader from '@/app/components/Loader/Loader';
import { useLoadUserQuery } from '@/redux/features/api/apiSlice';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';
import CourseContent from '../../components/Course/CourseContent';

type Props = {
    params:any;
}

const Page = ({params}:Props) => {
    const id = params.id;

    const {isLoading,error,data} = useLoadUserQuery(undefined,{});

    useEffect(() => {
        console.log(id);
        if(data){
            const isPurchased = data.user.courses.find((item:any) => item._id === id);
            if(!isPurchased){
                console.log("hoollo");
                redirect("/");
            }
            if(error){
                redirect("/");
            }
        }
    },[data,error]);

  return (
    <>
     {
        isLoading ? (
            <Loader/>
        ) : (
            <div>
                <CourseContent id={id} user={data.user}/>
            </div>
        )
     } 
    </>
  )
}

export default Page
