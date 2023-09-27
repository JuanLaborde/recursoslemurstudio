import React, { useEffect } from 'react';
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import Aos from "aos";
import "aos/dist/aos.css";

const Billing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease' });

  }, [])
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse} data-aos="flip-left" data-aos-delay="500">
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo} data-aos="fade-left" data-aos-delay="500">
        <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" /> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" data-aos="fade-down" data-aos-delay="800"/>
          <img src={google} alt="google play" className="w-[128px] h-[42px] object-contain cursor-pointer" data-aos="fade-down" data-aos-delay="900"/>
        </div>
      </div>
    </section>
  )
}


export default Billing