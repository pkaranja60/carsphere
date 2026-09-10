export interface CarSpec {
  drivetrain: string;
  engine: string;
  horsepower: number;
  topSpeed: string;
  torque: string;
  zeroToSixty: string;
}

export interface Car {
  category:
    | "Sedan"
    | "SUV"
    | "Coupe"
    | "Sports"
    | "Luxury"
    | "Electric"
    | "Hybrid";
  condition: "New" | "Used" | "Certified Pre-Owned";
  description: string;
  exteriorColor: string;
  features: string[];
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid" | "Plug-in Hybrid";
  id: string;
  images: string[];
  interiorColor: string;
  make: string;
  mileage: number;
  model: string;
  name: string;
  price: number;
  specs: CarSpec;
  transmission: "Automatic" | "Manual";
  vin: string;
  year: number;
}

export const MOCK_CARS: Car[] = [
  {
    category: "Coupe",
    condition: "New",
    description:
      "The 2024 BMW M4 Competition xDrive Coupe blends track-ready performance with everyday usability. With its striking Isle of Man Green exterior and aggressive stance, it's designed to turn heads. Under the hood lies a formidable 3.0-liter BMW M TwinPower Turbo inline 6-cylinder engine delivering 503 horsepower.",
    exteriorColor: "Isle of Man Green Metallic",
    features: [
      "M xDrive All-Wheel Drive",
      "Carbon Fiber Roof",
      "M Carbon Bucket Seats",
      "Harman Kardon Surround Sound",
      "Head-up Display",
      "Apple CarPlay & Android Auto",
      "Active Driving Assistant",
      "Parking Assistant Plus",
    ],
    fuelType: "Petrol",
    id: "bmw-m4-2024",
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b77137fa99b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814088921-12c8b746813e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076615-58784fcce6bd?auto=format&fit=crop&w=1200&q=80",
    ],
    interiorColor: "Kyalami Orange/Black Merino Leather",
    make: "BMW",
    mileage: 15,
    model: "M4",
    name: "BMW M4 Competition",
    price: 89_900,
    specs: {
      drivetrain: "AWD",
      engine: "3.0L Twin-Turbo I6",
      horsepower: 503,
      topSpeed: "180 mph",
      torque: "479 lb-ft",
      zeroToSixty: "3.4s",
    },
    transmission: "Automatic",
    vin: "WBS43AW0X0M4C0MP",
    year: 2024,
  },
  {
    category: "Sedan",
    condition: "New",
    description:
      "The newly redesigned Mercedes-Benz E-Class continues to set the benchmark for luxury sedans. Combining cutting-edge technology like the MBUX Superscreen with elegant styling and an incredibly smooth ride.",
    exteriorColor: "Obsidian Black Metallic",
    features: [
      "MBUX Superscreen",
      "Burmester 4D Surround Sound",
      "Airmatic Air Suspension",
      "Digital Light LED Headlamps",
      "Panorama Roof",
      "Active Distance Assist DISTRONIC",
    ],
    fuelType: "Hybrid",
    id: "mb-eclass-2024",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606129881656-787be0f14ba6?auto=format&fit=crop&w=1200&q=80",
    ],
    interiorColor: "Macchiato Beige Leather",
    make: "Mercedes-Benz",
    mileage: 22,
    model: "E-Class",
    name: "Mercedes-Benz E-Class",
    price: 64_500,
    specs: {
      drivetrain: "RWD",
      engine: "2.0L Turbo I4 Mild Hybrid",
      horsepower: 255,
      topSpeed: "130 mph",
      torque: "295 lb-ft",
      zeroToSixty: "6.1s",
    },
    transmission: "Automatic",
    vin: "W1KZF4EB1RN123456",
    year: 2024,
  },
  {
    category: "Luxury",
    condition: "New",
    description:
      "The Audi RS5 Sportback offers the perfect blend of high-performance driving dynamics and five-door practicality. Finished in the iconic Nardo Gray, this RS5 stands out in any crowd.",
    exteriorColor: "Nardo Gray",
    features: [
      "quattro All-Wheel Drive",
      "RS Sport Exhaust System",
      "Matrix-design LED headlights",
      "Bang & Olufsen 3D Sound",
      "Audi Virtual Cockpit Plus",
      "Fine Nappa Leather Seats",
    ],
    fuelType: "Petrol",
    id: "audi-rs5-2024",
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1612444634289-53e306fbc90b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1610486803730-81997d9c6e5a?auto=format&fit=crop&w=1200&q=80",
    ],
    interiorColor: "Black with Crescendo Red Stitching",
    make: "Audi",
    mileage: 12,
    model: "RS5",
    name: "Audi RS5 Sportback",
    price: 76_800,
    specs: {
      drivetrain: "AWD",
      engine: "2.9L Twin-Turbo V6",
      horsepower: 444,
      topSpeed: "155 mph",
      torque: "442 lb-ft",
      zeroToSixty: "3.8s",
    },
    transmission: "Automatic",
    vin: "WAUUPG24J2PA04481",
    year: 2024,
  },
  {
    category: "Sports",
    condition: "New",
    description:
      "The quintessential sports car. The Porsche 911 Carrera combines timeless design with thrilling rear-engine performance. With an 8-speed PDK transmission, gear changes are instantaneous.",
    exteriorColor: "Guards Red",
    features: [
      "8-speed Porsche Doppelkupplung (PDK)",
      "Porsche Active Suspension Management (PASM)",
      "Sport Chrono Package",
      "LED-Matrix Design Headlights",
      "Porsche Communication Management",
      "Sport Seats Plus",
    ],
    fuelType: "Petrol",
    id: "porsche-911-2024",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506015391300-415214824317?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=1200&q=80",
    ],
    interiorColor: "Black Leather",
    make: "Porsche",
    mileage: 8,
    model: "911",
    name: "Porsche 911 Carrera",
    price: 122_900,
    specs: {
      drivetrain: "RWD",
      engine: "3.0L Twin-Turbo Flat-6",
      horsepower: 379,
      topSpeed: "182 mph",
      torque: "331 lb-ft",
      zeroToSixty: "3.8s",
    },
    transmission: "Automatic",
    vin: "WP0AA2A94NS239401",
    year: 2024,
  },
  {
    category: "SUV",
    condition: "New",
    description:
      "The Range Rover Velar leads the way in progressive design. Clean, elegant and distinctive, it features a striking contemporary presence. The interior is a calm sanctuary with reductive design principles.",
    exteriorColor: "Fuji White",
    features: [
      "Pivi Pro Infotainment",
      "Meridian 3D Surround Sound System",
      "Electronic Air Suspension",
      "Sliding Panoramic Roof",
      "Premium LED Headlights",
      "Adaptive Dynamics",
    ],
    fuelType: "Diesel",
    id: "rr-velar-2024",
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0b12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    ],
    interiorColor: "Cloud/Ebony Perforated Grained Leather",
    make: "Land Rover",
    mileage: 45,
    model: "Range Rover Velar",
    name: "Range Rover Velar",
    price: 71_300,
    specs: {
      drivetrain: "AWD",
      engine: "3.0L Turbo I6 Mild Hybrid",
      horsepower: 395,
      topSpeed: "155 mph",
      torque: "406 lb-ft",
      zeroToSixty: "5.2s",
    },
    transmission: "Automatic",
    vin: "SALYA2GU3RA776123",
    year: 2024,
  },
  {
    category: "Electric",
    condition: "Used",
    description:
      "The quickest accelerating car in production today. The Model S Plaid features a tri-motor all-wheel-drive platform with torque vectoring, allowing it to go from zero to sixty in under 2 seconds.",
    exteriorColor: "Deep Blue Metallic",
    features: [
      "Tri-Motor All-Wheel Drive",
      "Yoke Steering",
      "Full Self-Driving Capability",
      "22-Speaker Audio System",
      "17-inch Cinematic Display",
      "Ventilated Front Seats",
    ],
    fuelType: "Electric",
    id: "tesla-model-s-2023",
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
    ],
    interiorColor: "Black and White with Carbon Fiber Decor",
    make: "Tesla",
    mileage: 5200,
    model: "Model S",
    name: "Tesla Model S Plaid",
    price: 89_990,
    specs: {
      drivetrain: "AWD",
      engine: "Tri-Motor Electric",
      horsepower: 1020,
      topSpeed: "200 mph",
      torque: "1050 lb-ft",
      zeroToSixty: "1.99s",
    },
    transmission: "Automatic",
    vin: "5YJSA1E20PF234567",
    year: 2023,
  },
];

export function getCarById(id: string): Car | undefined {
  return MOCK_CARS.find((car) => car.id === id);
}

export function getSimilarCars(carId: string, limit = 4): Car[] {
  const sourceCar = getCarById(carId);
  if (!sourceCar) {
    return MOCK_CARS.slice(0, limit);
  }

  // Filter out the same car, try to match by category first
  return MOCK_CARS.filter((car) => car.id !== carId)
    .sort((a, b) => {
      if (a.category === sourceCar.category) {
        return -1;
      }
      if (b.category === sourceCar.category) {
        return 1;
      }
      return 0;
    })
    .slice(0, limit);
}
