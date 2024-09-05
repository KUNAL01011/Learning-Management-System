import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Gane Bates",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAC2AP0RX5hS_Ow9-e2UHwdplgd2kdl0d0wg&s",
    profession: "Student | Cambridge university",
    comment:
      "lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.",
  },
  {
    name: "Gane Bates",
    avatar:
      "https://i.pinimg.com/736x/1a/f2/76/1af2765a0db89911f5526d623ebc0a16.jpg",
    profession: "Student | Cambridge university",
    comment:
      "lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.",
  },
  {
    name: "Gane Bates",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ln_pYUMg7rREzR2MhrGFL4NYQgzShBxXYA&s",
    profession: "Student | Cambridge university",
    comment:
      "lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.",
  },
  {
    name: "Gane Bates",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf6LK8lKnmK0CpasYcFA5ZMrBeuqh1atCeWP5L2v9A7j9cm1L3A-ep8jmTnGuEBko4JnE&usqp=CAU",
    profession: "Student | Cambridge university",
    comment:
      "lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.",
  },
  {
    name: "Gane Bates",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQehJKgepw4q5TKHbrQopEoO8a16dsRtiwtuw&s",
    profession: "Student | Cambridge university",
    comment:
      "lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.",
  },
  {
    name: "Gane Bates",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2liOj8Wa6ddAQv5OqidBm4jmN5jaluyyag&s",
    profession: "Student | Cambridge university",
    comment:
      "lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.",
  },
  {
    name: "Gane Bates",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacHO3nXEdEWc43VEQW0RdSZKsRkJo1Cf7BA&s",
    profession: "Student | Cambridge university",
    comment:
      "lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.",
  },
  {
    name: "Gane Bates",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacHO3nXEdEWc43VEQW0RdSZKsRkJo1Cf7BA&s",
    profession: "Student | Cambridge university",
    comment:
      "lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.",
  },
  {
    name: "Gane Bates",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacHO3nXEdEWc43VEQW0RdSZKsRkJo1Cf7BA&s",
    profession: "Student | Cambridge university",
    comment:
      "lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.",
  },
  {
    name: "Gane Bates",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacHO3nXEdEWc43VEQW0RdSZKsRkJo1Cf7BA&s",
    profession: "Student | Cambridge university",
    comment:
      "lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem. lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.lorem ipusm dolor sit amet consectetur adipiscing elit. Quisquam, quidem.",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assets/v1.svg")}
            alt="business"
            width={800}
            height={800}
          />
        </div>
        <div className="800px:w-[50%] w-full text-start">
          <h3 className={`text-[25px] text-black dark:text-white font-[500] font-Poppins py-2 800px:!text-[40px]`}>
            Our Student Are <span className="text-[#4239EF]">Our Strength</span>
            <br />
            See What They Say About Us
          </h3>
          <br />
          <p className={styles.lable}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            possimus amet in ipsam vero corporis molestiae harum earum
            architecto? Quis, laboriosam. Inventore corrupti quia voluptatem
            dolor ducimus deserunt iste eum.
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(81)]:!mt-[-60px] md:[&>*:nth-child(16)]:!mt-[-40px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
