import React, { useState, useEffect } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import data
import { projectsData } from "../data";
import { projectsNav } from "../data";

// import components
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  var settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      {/* projects nav */}
      <nav className="mt-4 mb-4">
        <ul className="flex flex-col md:flex-row items-start text-black font-normal cpregular">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize font-bold m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects */}

      <section className=" gap-y-12 lg:gap-x-8 lg:gap-y-8">
        <Slider {...settings}>
          {projects.map((item) => {
            return <Project item={item} key={item.id} />;
          })}
        </Slider>
      </section>
    </div>
  );
};

export default Projects;
