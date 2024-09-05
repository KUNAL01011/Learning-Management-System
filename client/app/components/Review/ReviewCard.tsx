import Ratings from "@/app/utils/Ratings";
import React from "react";

type Props = {
  item: any;
};
const ReviewCard = (props: Props) => {
  return (
    <div className="w-full h-max pb-4 dark:bg-slate-500 dark:bg-opacity-[0.20] border border-[#00000028] dark:border-[#ffffff1d] backdrop-blur shadow-[bg-slate-700] rounded-lg shadow-inner p-4">
      <div className="flex w-full">
        <img
          src={props.item.avatar}
          width={50}
          height={50}
          className="w-[50px] h-[50px] rounded-full object-cover"
          alt=""
        />
        <div className="800px:flex justify-between w-full hidden">
          <div className="pl-4">
            <h5 className="text-[20px] text-black dark:text-white">
              {props.item.name}
            </h5>
            <h6 className="text-[16px] text-[#000] dark:text-[#ffffffab]">
              {props.item.profession}
            </h6>
          </div>
          <Ratings rating={props.item.ratings} />
        </div>
        {/* for mobile */}
        <div className="800px:hidden justify-between w-full flex flex-col">
          <div className="pl-4">
            <h5 className="text-[20px] text-black dark:text-white">
              {props.item.name}
            </h5>
            <h6 className="text-[16px] text-[#000] dark:text-[#ffffffab]">
              {props.item.profession}
            </h6>
          </div>
          <Ratings rating={props.item.ratings} />
        </div>
      </div>
      <p className="pt-2 px-2 font-Poppins text-black dark:text-white">
        {props.item.comment}
      </p>
    </div>
  );
};

export default ReviewCard;
