import React, { useRef } from 'react';
import { WORK_EXPERIENCE } from '../Utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import './WorkExperience.css'

const WorkExperience = () => {
    const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    }
    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <motion.section 
            className='experience-container'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h5>Work Experience</h5>
            <div className="experience-content">
                <div className="arrow-right" onClick={slideRight}>
                    <MdKeyboardArrowRight />
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    <MdOutlineKeyboardArrowLeft />
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {WORK_EXPERIENCE.map((item) => (
                        <ExperienceCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </motion.section>
    );
}

export default WorkExperience;

