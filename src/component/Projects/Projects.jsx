import React, { useRef } from 'react';
import { WORK_EXPERIENCE,My_Projects } from '../Utils/data';
// import ExperienceCard from './ExperienceCard/ExperienceCard';
import ProjectCard from './ProjectsCard/ProjectsCard'
import Slider from 'react-slick';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import './Projects.css'
const Projects = () => {
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
        <section className='experience-container'>
            <h5>My Projects</h5>
            <div className="experience-content">
                <MdKeyboardArrowRight className="arrow-right" onClick={slideRight} />
                <MdOutlineKeyboardArrowLeft className="arrow-left" onClick={slideLeft} />
                <Slider ref={sliderRef} {...settings}>
                    {My_Projects.map((item) => (
                        <ProjectCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Projects;
