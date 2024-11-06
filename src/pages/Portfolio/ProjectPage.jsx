import React from 'react';
import { useParams } from 'react-router-dom';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import projects from '../../data/portfolio';
import { Cloudinary } from '@cloudinary/url-gen';
import { useEffect, useRef } from 'react';

const cld = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }
});

export default function ProjectPage() {
    const { projectId } = useParams();
    const project = projects.find(p => p.id.toString() === projectId);

    // Add refs for cloudinary
    const cloudinaryRef = useRef();
    const playerRefs = useRef([]);

    // Initialize the video player
    useEffect(() => {
        // Load the Cloudinary script only once
        if (cloudinaryRef.current) return;

        cloudinaryRef.current = window.cloudinary;
        
        // Initialize each video player
        playerRefs.current.forEach((playerRef, index) => {
            if (playerRef) {
                cloudinaryRef.current.videoPlayer(playerRef, {
                    cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
                    controls: true,
                    fluid: true,
                    aspectRatio: '16:9',
                    objectFit: 'cover',
                    colors: {
                        base: '#000000',
                        accent: '#3B82F6', // blue-500 to match your theme
                        text: '#FFFFFF'
                    }
                });
            }
        });
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl text-gray-600">Project not found</h2>
            </div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
            {/* Hero Section */}
            <div className="mb-12">
                <div className="relative mb-8 pb-4">
                    <motion.h1 
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        {project.title}
                    </motion.h1>
                    <div className="absolute left-0 bottom-0 w-52 h-1 bg-blue-500"></div>
                </div>
                <div className="prose prose-lg max-w-3xl text-gray-600 text-xl">
                    {project.description}
                </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                <Gallery>
                    <Masonry
                        breakpointCols={{
                            default: 3,
                            1100: 3,
                            700: 2,
                            500: 1
                        }}
                        className="flex -ml-4 w-auto"
                        columnClassName="pl-4 bg-clip-padding"
                    >
                        {project.images?.map((image, index) => (
                            <Item
                                key={index}
                                original={image}
                                thumbnail={image}
                                width="1024"
                                height="630"
                                
                            >
                                {({ ref, open }) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="mb-4"
                                    >
                                        <img
                                            ref={ref}
                                            onClick={open}
                                            src={image}
                                            alt={`${project.title} - Image ${index + 1}`}
                                            className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                                        />
                                    </motion.div>
                                )}
                            </Item>
                        ))}
                    </Masonry>
                </Gallery>
            </div>

            {/* Videos Section */}
            {project.videos && project.videos.length > 0 && (
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Videos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.videos.map((videoId, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative aspect-video w-full overflow-hidden rounded-lg"
                            >
                                <video
                                    ref={el => playerRefs.current[index] = el}
                                    className="cld-video-player w-full h-full object-cover"
                                    data-cld-public-id={videoId}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
}
