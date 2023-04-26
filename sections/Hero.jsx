"use client";
import Header from "@/components/Header";
import styles from "@/styles";
const Hero = () => {
  return (
    <>
      <section
        className={`2xl:max-w-[1280px] w-full mx-auto p-5 relative z-20`}
      >
        <div className="absolute gradient-01 w-[50%] z-10 top-0 left-0 h-[100%]" />

        <Header />
      </section>
      <div className="flex flex-col my-12">
        <div className="flex flex-col items-center relative z-10">
          <h1 className={styles.heroHeading}>METAVERSE</h1>
          <div className="flex items-center">
            <h1 className={styles.heroHeading}>MA</h1>
            <div className={styles.heroDText}></div>
            <h1 className={styles.heroHeading}>NESS</h1>
          </div>
        </div>
        <div className="flex flex-col pl-16  sm:pl-40 -mt-10 ">
          <div className="w-full h-40 hero-gradient rounded-tl-[130px]" />
          <img
            src="/cover.png"
            alt="hero"
            className="w-full h-[70vh] object-cover rounded-tl-[130px] -mt-32"
          />
        </div>
        <a href="#explore">
          <img
            src="/stamp.png"
            alt="circle"
            className="w-[95px] object-contain cursor-pointer  ml-auto mr-5 md:mr-9 md:w-[125px]  -mt-10"
          />
        </a>
      </div>
    </>
  );
};

export default Hero;
