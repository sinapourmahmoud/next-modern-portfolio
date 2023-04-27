"use client";

import styles from "@/styles";

const Feedback = () => (
  <section
    className={`2xl:max-w-[1280px] w-full relative   mx-auto my-44   h-[90vh]  sm:px-16 px-6 flex flex-col gap-5 lg:flex-row `}
  >
    <img
      src="/stamp.png"
      alt="stamp"
      className="w-[155px] h-[155px] object-contain absolute top-8 left-[28%] hidden lg:block"
    />
    <div className="feedback-gradient" />
    <div className="flex-[1.5] md:flex-[0.6] md:pb-10  gradient-05 flex border border-[rgba(255,255,255,0.37)] flex-col lg:gap-6 px-6 rounded-[30px]">
      <div className="mt-auto">
        <h2 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
          Samantha
        </h2>
        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          founder Metaverus
        </p>
      </div>
      <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        “With the development of today's technology, metaverse is very useful
        for today's work, or can be called web 3.0. by using metaverse you can
        use it as anything”
      </p>
    </div>
    <div className="p-2 flex-[0.5] md:flex-[1.5]">
      <img
        src="/planet-09.png"
        alt="roocket"
        className="w-full h-full object-cover rounded-[30px]"
      />
    </div>
  </section>
);

export default Feedback;
