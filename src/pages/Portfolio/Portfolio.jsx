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
          <p className="text-gray-600">
            {project.description}
          </p>
        </div>
      </div>
    </Tilt>
  );
};

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative mb-8 pb-4">
        <h2 className="text-4xl font-bold text-center mb-4">Portfolio</h2>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-52 h-1 bg-blue-500"></div>
      </div>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        Specializing in photorealistic 3D visualization services including Interior Visualization, 
        Exterior Rendering, Product Visualization, 360° Virtual Tours, and 3D Animation
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
