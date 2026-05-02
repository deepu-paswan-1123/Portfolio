import React, { useRef } from 'react';
import { My_Projects } from '../Utils/data';
import ProjectCard from './ProjectsCard/ProjectsCard'
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import './Projects.css'

const Projects = () => {
    const sliderRef = useRef();
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
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
            <h5>My Projects</h5>
            <div className="experience-content">
                <div className="arrow-right" onClick={slideRight}>
                    <MdKeyboardArrowRight />
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    <MdOutlineKeyboardArrowLeft />
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {My_Projects.map((item) => (
                        <ProjectCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </motion.section>
    );
}

export default Projects;

