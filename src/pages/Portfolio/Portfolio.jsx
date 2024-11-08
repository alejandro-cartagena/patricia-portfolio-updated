import React from 'react';
import { Tilt } from 'react-tilt';
import { useNavigate } from 'react-router-dom';
import projects from '../../data/portfolio';

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.05,
  speed: 1500,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};


const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/portfolio/${project.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  };

  return (
    <Tilt options={defaultOptions}>
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-full flex flex-col 
        transition-all duration-300 ease-in-out hover:shadow-xl"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`View ${project.title} project`}
      >
        <div className="h-48 overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            {project.title}
          </h3>
          <p className="text-gray-600 line-clamp-4">
            {project.description}
          </p>
        </div>
      </div>
    </Tilt>
  );
};

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="relative mb-4">
        <h2 className="text-4xl font-bold text-center border-b-4 border-blue-500 w-fit mx-auto pb-4">Portfolio</h2>
      </div>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 md:mb-12 text-xl">
        Specializing in Interior Visualization, Exterior Rendering, Product Visualization, and 3D Animation
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
