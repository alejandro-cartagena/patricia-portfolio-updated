// Portsview Images
import portsViewImg1 from "../assets/images/portsViewImg1.jpg";
import portsViewImg2 from "../assets/images/portsViewImg2.jpg";
import portsViewImg3 from "../assets/images/portsViewImg3.jpg";
import portsViewImg4 from "../assets/images/portsViewImg4.jpg";
import portsViewVideoThumbnail1 from "../assets/images/portsViewVideoThumbnail1.jpg";
import portsViewVideoThumbnail2 from "../assets/images/portsViewVideoThumbnail2.jpg";

// Blue Mountain Images
import blueMountainImg1 from '../assets/images/blueMountainImg1.jpg';
import blueMountainImg2 from '../assets/images/blueMountainImg2.jpg';
import blueMountainImg3 from '../assets/images/blueMountainImg3.jpg';   
import blueMountainImg4 from '../assets/images/blueMountainImg4.jpg';   
import blueMountainLobby from '../assets/images/blueMountainLobby.jpg';

// Costa Rica Building Images
import costaRicaImg1 from "../assets/images/costaRicaImg1.jpg";

// House Images
import houseImg1 from "../assets/images/houseImg1.jpg";
import houseImg2 from "../assets/images/houseImg2.jpg";
import houseImg3 from "../assets/images/houseImg3.jpg";
import houseImg4 from "../assets/images/houseImg4.jpg";

// Parking Lot Images
import parkingLotImg1 from "../assets/images/parkingLotImg1.jpg";
import parkingLotImg2 from "../assets/images/parkingLotImg2.jpg";
import parkingLotImg3 from "../assets/images/parkingLotImg3.jpg";

// Pollo Tropical Images
import polloTropicalVideoThumbnail1 from "../assets/images/polloTropicalVideoThumbnail1.jpg";
import polloTropicalVideoThumbnail2 from "../assets/images/polloTropicalVideoThumbnail2.jpg";

import buildingImg from "../assets/images/building.jpg";

const videoLinks = [
    // Portsview Aventura videos
    "Patricia Portfolio Videos/r2l7vo2yclwvce9ayskn",
    "Patricia Portfolio Videos/kby9uglbgbrh8cgkwij4",
    
    // Blue Mountain videos
    "Patricia Portfolio Videos/lzjclmbsr6ipfkwbtkxc",
    
    // Pollo Tropical videos
    "Patricia Portfolio Videos/jd0kngby3ri9p2rygij0",
    "Patricia Portfolio Videos/fmzuahmzlefnvpeeynyk",
    
    // Parking Space videos
    "Patricia Portfolio Videos/bmdajujyeszv3b0jmhf8",
    
    // Costa Rica Hotel videos
    "Patricia Portfolio Videos/pbhkwondol7uhh30mzjk"
  ];

  // Services Thumbnails
  import interiorRenderingThumbnail from "../assets/images/interiorRenderingThumbnail.jpeg";
  import exteriorRenderingThumbnail from "../assets/images/exteriorRenderingThumbnail.jpeg";
  import threeDFloorPlansThumbnail from "../assets/images/threeDFloorPlansThumbnail.jpg";

const servicesData = [
    {
        id: "interior-rendering",
        cardThumbnail: interiorRenderingThumbnail,
        title: "Interior Rendering",
        shortDescription: "Transform your interior concepts into 3D renderings that showcase every detail of your design vision.",
        description: "Transform your interior spaces into photorealistic 3D visualizations. Our interior rendering service brings your design concepts to life with stunning detail, accurate lighting, textures, and materials. Perfect for previewing renovation projects, staging virtual properties, or showcasing architectural designs before construction begins.",
        benefits: [
            "Enhance communication with clients by providing realistic visualizations of your designs.",
            "Streamline the approval process by showcasing your concepts in a virtual environment.", 
            "Save time and resources by reducing the need for physical mockups or expensive prototypes.",
            "Improve decision-making by allowing stakeholders to experience your designs in a realistic setting.",
            "Demonstrate the potential of your designs to clients and investors through immersive visualizations.",
        ],
        images: [
            portsViewImg1,
            portsViewImg2,
            portsViewImg3,
            portsViewImg4,
            blueMountainImg1,
            blueMountainImg2,
            blueMountainImg3,
            blueMountainImg4,
            blueMountainLobby,
            polloTropicalVideoThumbnail1,
        ],
        videoLinks: [],
        faq: [
            {
                question: "What is interior rendering?",
                answer: "Interior rendering is the process of creating photorealistic 3D visualizations of interior spaces. It involves using advanced software to create detailed, realistic images that can be used to showcase designs, communicate ideas, and make decisions before construction begins.",
            },
            {
                question: "How does interior rendering benefit my project?",
                answer: "Interior rendering allows you to visualize your design concepts in a realistic setting, enabling you to communicate your ideas more effectively and make informed decisions before construction begins. It can help you secure approvals, showcase your designs to clients, and streamline the approval process.",
            },
            {
                question: "How much does interior rendering cost?",
                answer: "The cost of interior rendering varies depending on several factors including project complexity, level of detail required, number of views needed, and desired turnaround time. Each project is unique, so we provide custom quotes based on your specific requirements and objectives."
            }
        ]
    },
    {
        id: "exterior-rendering",
        cardThumbnail: exteriorRenderingThumbnail,
        title: "Exterior Rendering",
        shortDescription: "Create stunning architectural visualizations that bring your exterior designs to life with realistic materials and lighting.",
        description: "Create stunning visualizations of your building exteriors with our photorealistic 3D rendering service. We specialize in bringing architectural designs to life with precise attention to materials, landscaping, lighting, and environmental context. Ideal for real estate marketing, architectural presentations, or pre-construction visualization.",
        benefits: [
            "Present your architectural vision with compelling photorealistic imagery.",
            "Showcase different times of day and seasonal variations of your design.",
            "Demonstrate how your building integrates with its surroundings.",
            "Market properties before construction completion.",
            "Obtain stakeholder buy-in with convincing visual representations.",
        ],
        images: [
            buildingImg,
            houseImg1,
            houseImg2,
            houseImg3,
            houseImg4,
            parkingLotImg1,
            parkingLotImg2,
            parkingLotImg3,
            costaRicaImg1
        ],
        videoLinks: [
            "Patricia Portfolio Videos/pbhkwondol7uhh30mzjk"
        ],
        faq: [
            {
                question: "What is exterior rendering?",
                answer: "Exterior rendering is the creation of photorealistic 3D visualizations of building exteriors and landscapes. Using advanced 3D modeling and rendering software, we create detailed images that showcase architectural designs from various angles and perspectives.",
            },
            {
                question: "What elements can be included in exterior renderings?",
                answer: "Exterior renderings can include architectural details, landscaping, lighting effects, surrounding environment, weather conditions, and even people and vehicles for scale. We can also show your building at different times of day and seasons to demonstrate its appearance in various conditions.",
            },
            {
                question: "How much does exterior rendering cost?",
                answer: "Exterior rendering costs are determined by various factors such as project complexity, desired level of detail, number of viewpoints, environmental elements, and timeline requirements. We provide customized quotes after understanding your specific project needs and goals."
            }
        ]
    },
    {
        id: "3d-floor-plans",
        cardThumbnail: threeDFloorPlansThumbnail,
        title: "3D Floor Plans",
        shortDescription: "Transform traditional blueprints into detailed 3D floor plans that help clients easily visualize layouts and spatial relationships.",
        description: "Transform traditional 2D floor plans into engaging 3D visualizations that help clients truly understand spatial relationships and flow. Our detailed 3D floor plans provide an intuitive bird's-eye view of interior layouts, making it easier to visualize room arrangements, traffic patterns, and overall space utilization.",
        benefits: [
            "Help clients easily understand spatial relationships and room layouts",
            "Showcase furniture placement and interior design possibilities",
            "Highlight key architectural features and flow between spaces",
            "Perfect for real estate marketing and pre-construction sales",
            "Facilitate better space planning and design decisions"
        ],
        images: [
            blueMountainImg1,
            blueMountainImg2,
            portsViewImg1,
            portsViewImg2
        ],
        videoLinks: [],
        faq: [
            {
                question: "What is a 3D floor plan?",
                answer: "A 3D floor plan is a three-dimensional visualization of a property's layout that shows walls, doors, windows, and interior features from an elevated perspective. Unlike traditional 2D plans, 3D floor plans provide depth and height information, making spatial relationships easier to understand."
            },
            {
                question: "What details can be included in 3D floor plans?",
                answer: "3D floor plans can include furniture, fixtures, appliances, color schemes, materials, lighting effects, and even decorative elements. We can show both architectural elements and interior design features to create a comprehensive view of the space."
            },
            {
                question: "How much do 3D floor plans cost?",
                answer: "Pricing for 3D floor plans depends on factors such as the property's size, level of detail needed, inclusion of furniture and decorative elements, and number of revisions required. Contact us to discuss your project requirements for a tailored quote."
            }
        ]
    },
    // {
    //     id: "4",
    //     cardThumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    //     title: "Virtual Tours",
    //     shortDescription: "Create videos that allow clients to explore spaces from every angle.",
    //     description: "Immerse your clients in photorealistic virtual environments through engaging video walkthroughs. These high-quality visualizations let viewers explore spaces through fluid video tours, creating an impactful and memorable experience. Perfect for real estate marketing, hospitality showcases, and pre-construction presentations.",
    //     benefits: [
    //         "Provide immersive, interactive experiences of unbuilt spaces",
    //         "Allow clients to explore properties remotely at their convenience",
    //         "Reduce the need for physical site visits during sales process",
    //         "Create engaging content for websites and marketing materials",
    //         "Stand out from competitors with innovative presentation methods"
    //     ],
    //     images: [
    //         portsViewImg3,
    //         portsViewImg4,
    //         blueMountainImg3,
    //         blueMountainImg4
    //     ],
    //     videoLinks: [
    //         "Patricia Portfolio Videos/kby9uglbgbrh8cgkwij4"
    //     ],
    //     faq: [
    //         {
    //             question: "What is a 360° virtual tour?",
    //             answer: "A 360° virtual tour is an interactive visualization that allows viewers to explore a space from every angle, as if they were actually there. Users can pan, rotate, and zoom to examine different areas of the space, creating an immersive experience that's accessible from any device."
    //         },
    //         {
    //             question: "How can virtual tours be accessed and shared?",
    //             answer: "Virtual tours can be embedded on websites, shared via links, integrated into social media, or included in marketing materials. They're compatible with most devices including computers, smartphones, and VR headsets, making them easily accessible to your target audience."
    //         },
    //         {
    //             question: "How much do 360° virtual tours cost?",
    //             answer: "The cost of 360° virtual tours varies based on the size and complexity of the space, number of viewpoints needed, level of detail required, interactive features desired, and customization requirements. Contact us to discuss your project needs for a detailed quote."
    //         }
    //     ]
    // },
    {
        id: "3d-animation",
        cardThumbnail: buildingImg,
        title: "3D Animation",
        description: "Transform your vision into dynamic, cinematic experiences with our professional 3D animation services. We create fluid, photorealistic animations that bring architectural spaces and design concepts to life. Perfect for marketing campaigns, presentations, and showcasing the full potential of your projects through compelling storytelling.",
        shortDescription: "Bring your designs to life with dynamic 3D animations that showcase your project in motion.",
        benefits: [
            "Create engaging visual narratives of your projects",
            "Showcase dynamic features and spatial flow",
            "Highlight key selling points through cinematic sequences",
            "Deliver powerful marketing content for social media",
            "Demonstrate project evolution and transformation"
        ],
        images: [
            polloTropicalVideoThumbnail1,
            polloTropicalVideoThumbnail2,
            portsViewVideoThumbnail1,
            portsViewVideoThumbnail2
        ],
        faq: [
            {
                question: "What types of 3D animations do you create?",
                answer: "We create various types of architectural animations including walkthroughs, flyovers, exterior-to-interior transitions, lighting studies, construction sequences, and feature highlights. Our animations can range from simple space demonstrations to complex narrative-driven presentations."
            },
            {
                question: "How long does it take to create a 3D animation?",
                answer: "The timeline for a 3D animation typically ranges from 2-6 weeks, depending on the complexity, length, and level of detail required. Factors like revisions, rendering time, and project scope can affect the delivery schedule."
            },
            {
                question: "How much do 3D animations cost?",
                answer: "3D animation pricing varies depending on factors such as animation length, complexity of the scenes, level of detail required, special effects needed, and project timeline. Each project is unique, so we provide custom quotes based on your specific requirements."
            }
        ]
    },
    // {
    //     id: "6",
    //     cardThumbnail: "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
    //     title: "Custom 3D Modeling",
    //     shortDescription: "Create detailed 3D models of architectural elements, furniture, and custom fixtures to your exact specifications.",
    //     description: "Our expert 3D modeling service creates detailed, customized assets for any architectural or design project. From furniture and fixtures to complete building exteriors, we deliver high-quality, photorealistic 3D models that meet your exact specifications. Ideal for product visualization, architectural details, and custom design elements.",
    //     benefits: [
    //         "Create unique, project-specific design elements",
    //         "Visualize custom furniture and fixtures",
    //         "Generate accurate material and finish representations",
    //         "Develop detailed architectural components",
    //         "Produce models for multiple visualization purposes"
    //     ],
    //     images: [
    //         houseImg1,
    //         houseImg2,
    //         parkingLotImg1,
    //         parkingLotImg2
    //     ],
    //     faq: [
    //         {
    //             question: "What can be created with custom 3D modeling?",
    //             answer: "We can create virtually any 3D asset including furniture, architectural elements, fixtures, products, decorative items, and complete building models. Our modeling service can accommodate both standard architectural components and unique, custom-designed elements."
    //         },
    //         {
    //             question: "What file formats do you provide for 3D models?",
    //             answer: "We can deliver 3D models in various formats including .obj, .fbx, .3ds, .max, and others to ensure compatibility with your preferred software. Models can be optimized for different uses such as rendering, animation, or real-time visualization."
    //         },
    //         {
    //             question: "How much does custom 3D modeling cost?",
    //             answer: "Custom 3D modeling costs vary based on the complexity of the objects or structures, level of detail required, texturing needs, intended use of the models, and project timeline. Contact us to discuss your specific requirements for a tailored quote."
    //         }
    //     ]
    // }
    
];

export default servicesData;
