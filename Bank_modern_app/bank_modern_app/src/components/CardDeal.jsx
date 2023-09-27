import React, { useEffect } from 'react';
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from './Button';
import Aos from "aos";
import "aos/dist/aos.css";

const CardDeal = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease' });

  }, [])
  return (
  <section className={layout.section}>
    <div className={layout.sectionInfo} data-aos="fade-right" data-aos-delay="500">
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles='mt-10' />
    </div>

    <div className={layout.sectionImg} data-aos="flip-right" data-aos-delay="500">
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
)
}

export default CardDeal