// Blue Mountain Images
import blueMountainImg1 from '../assets/images/blueMountainImg1.jpg';
import blueMountainImg2 from '../assets/images/blueMountainImg2.jpg';
import blueMountainImg3 from '../assets/images/blueMountainImg3.jpg';   
import blueMountainImg4 from '../assets/images/blueMountainImg4.jpg';   
import blueMountainLobby from '../assets/images/blueMountainLobby.jpg';
import blueMountainThumbnail from '../assets/images/blueMountainThumbnail.jpg';  

// Building Image
import building from "../assets/images/building.jpg";

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

// Portsview Images
import portsViewImg1 from "../assets/images/portsViewImg1.jpg";
import portsViewImg2 from "../assets/images/portsViewImg2.jpg";
import portsViewImg3 from "../assets/images/portsViewImg3.jpg";
import portsViewImg4 from "../assets/images/portsViewImg4.jpg";
import portsViewVideoThumbnail1 from "../assets/images/portsViewVideoThumbnail1.jpg";
import portsViewVideoThumbnail2 from "../assets/images/portsViewVideoThumbnail2.jpg";


const projects = [
    {
        id: "1",
        title: "Blue Mountain",
        description: "A contemporary living space design featuring clean lines, neutral colors, and natural light. The project emphasizes open space concepts and functional minimalism.",
        images: [
            blueMountainImg1,
            blueMountainImg2,
            blueMountainImg3,
            blueMountainImg4,
            blueMountainLobby,
            blueMountainThumbnail
        ],
        videos: [
            "https://youtube.com/watch?v=living-room-tour",
            "https://vimeo.com/living-room-walkthrough"
        ]
    },
    {
        id: "2", 
        title: "Portsview Aventura",
        description: "An elegant master bathroom featuring marble surfaces, a freestanding tub, and custom lighting. The design combines luxury with practical functionality.",
        images: [
            portsViewImg1,
            portsViewImg2,
            portsViewImg3,
            portsViewImg4,
            portsViewVideoThumbnail1,
            portsViewVideoThumbnail2
        ],
        videos: [
            "https://youtube.com/watch?v=bathroom-showcase",
            "https://vimeo.com/bathroom-details"
        ]
    },
    {
        id: "3",
        title: "Pollo Tropical",
        description: "A state-of-the-art kitchen with custom cabinetry, premium appliances, and an island centerpiece. Perfect blend of style and functionality.",
        images: [
            polloTropicalVideoThumbnail1,
            polloTropicalVideoThumbnail2
        ],
        videos: [
            "https://youtube.com/watch?v=kitchen-reveal",
            "https://vimeo.com/kitchen-tour"
        ]
    },
    {
        id: "4",
        title: "Parkin Space",
        description: "A modern office design emphasizing productivity and collaboration. Features open workspaces, meeting rooms, and relaxation areas.",
        images: [
            parkingLotImg1,
            parkingLotImg2,
            parkingLotImg3
        ],
        videos: [
            "https://youtube.com/watch?v=office-walkthrough",
            "https://vimeo.com/office-showcase"
        ]
    },
    {
        id: "5",
        title: "Modern Home",
        description: "An urban oasis featuring landscaped gardens, outdoor seating, and stunning city views. Perfect blend of nature and modern design.",
        images: [
            houseImg1,
            houseImg2,
            houseImg3,
            houseImg4
        ],
        videos: [
            "https://youtube.com/watch?v=terrace-tour",
            "https://vimeo.com/terrace-showcase"
        ]
    },
    {
        id: "6",
        title: "Costa Rica Hotel",
        description: "A sophisticated hotel lobby design combining luxury with comfort. Features custom furniture, artistic lighting, and premium finishes.",
        images: [
            building,
        ],
        videos: [
            "https://youtube.com/watch?v=lobby-showcase",
            "https://vimeo.com/lobby-walkthrough"
        ]
    },
    // ... more projects
];

export default projects; 