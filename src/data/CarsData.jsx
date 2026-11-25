let cachedCars = null;

export function getCars() {
  if (cachedCars) {
    return Promise.resolve(cachedCars);
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      const cars = [
        {
          id: 1,
          title: "Toyota GR GX 2026",
          url: "/toyota-1.jfif",
          mileage: "40,500",
          type: "Coupe",
          transmission: "Automatic",
          price: 100000,
          description:
            "Designed for drivers seeking an aggressive sports-car experience, Toyota's GR performance lineup emphasizes precision handling, responsive acceleration, and track-inspired engineering. The exact GR GX model designation needs verification before assigning an engine specification.",
        },
        {
          id: 2,
          title: "Toyota Corolla GR 2023",
          url: "/toyota-2.jfif",
          mileage: "68,205",
          type: "Hatchback",
          transmission: "Manual / Automatic",
          price: 50450,
          description:
            "The GR Corolla was built to bring rally-inspired performance to everyday driving. It features a turbocharged 1.6L three-cylinder engine, all-wheel drive, aggressive styling, and performance-focused suspension. Its compact design makes it practical while delivering an exciting driving experience.",
        },
        {
          id: 3,
          title: "Toyota Camry TRD 2018",
          url: "/toyota-3.jfif",
          mileage: "11,740",
          type: "Sedan",
          transmission: "Automatic",
          price: 25795,
          description:
            "The Camry is designed to combine everyday comfort, reliability, and fuel efficiency with a spacious interior. A standard 2018 Camry could have a 2.5L four-cylinder or 3.5L V6 engine, depending on trim. Note that the Camry TRD performance trim was introduced for the 2020 model year, not 2018.",
        },
        {
          id: 4,
          title: "Toyota Supra GR 2020",
          url: "/toyota-4.jfif",
          mileage: "22,702",
          type: "Coupe",
          transmission: "Automatic",
          price: 40000,
          description:
            "The GR Supra was developed to revive Toyota's legendary sports-car heritage with modern engineering and exciting performance. Its 2020 3.0L turbocharged inline-six engine delivers strong acceleration, while its rear-wheel-drive layout, balanced chassis, and aerodynamic styling make it ideal for driving enthusiasts.",
        },
        {
          id: 5,
          title: "Toyota Highlander 2024",
          url: "/toyota-5.jfif",
          mileage: "96,996",
          type: "SUV",
          transmission: "Automatic",
          price: 5340,
          description:
            "The Highlander was designed for families needing additional passenger space, comfort, and everyday versatility. Its standard gas model features a 2.4L turbocharged four-cylinder engine, with available all-wheel drive. It offers three-row seating, modern safety technology, and plenty of cargo flexibility.",
        },
        {
          id: 6,
          title: "Toyota Tacoma 2016",
          url: "/toyota-6.jfif",
          mileage: "98,403",
          type: "Truck",
          transmission: "Manual / Automatic",
          price: 12695,
          description:
            "The Tacoma was engineered for drivers who need a dependable midsize pickup capable of handling work and outdoor adventures. It offers a 2.7L four-cylinder or an available 3.5L V6 engine. Its durable construction, available four-wheel drive, and practical truck bed make it suitable for hauling and off-road use.",
        },
        {
          id: 7,
          title: "Honda Prelude 2026",
          url: "/honda-1.jfif",
          mileage: "90,000",
          type: "Coupe",
          transmission: "Automatic",
          price: 60000,
          description:
            "The Prelude returns as a modern hybrid sports coupe designed to combine engaging driving dynamics with improved fuel efficiency. It uses a 2.0L four-cylinder hybrid powertrain with two electric motors and Honda's S+ Shift technology. Its sleek styling, sporty handling, and electrified performance target drivers wanting excitement without sacrificing efficiency.",
        },
        {
          id: 8,
          title: "Honda Civic Type R 2016",
          url: "/honda-2.jfif",
          mileage: "99,999",
          type: "Hatchback",
          transmission: "Manual",
          price: 11470,
          description:
            "The Civic Type R was developed to bring race-inspired engineering and high-performance driving to the compact hatchback segment. The 2016 FK2-generation Type R uses a 2.0L turbocharged four-cylinder engine paired with a six-speed manual transmission. It features aggressive aerodynamics, sport-tuned suspension, and front-wheel drive. Note that this generation was not officially sold as a 2016 U.S.-market Civic Type R.",
        },
        {
          id: 9,
          title: "Honda Prologue 2026",
          url: "/honda-3.jfif",
          mileage: "48,000",
          type: "SUV",
          transmission: "Automatic",
          price: 55320,
          description:
            "The Prologue was developed as Honda's fully electric SUV, offering a spacious interior, modern technology, and zero tailpipe emissions. It uses an electric motor system rather than a traditional gasoline engine, with available front-wheel and all-wheel-drive configurations. Its purpose is to provide families with a practical transition into electric transportation.",
        },
        {
          id: 10,
          title: "Honda Accord 2018",
          url: "/honda-4.jfif",
          mileage: "48,000",
          type: "Sedan",
          transmission: "Manual / Automatic",
          price: 9999,
          description:
            "The Accord was designed to deliver a comfortable, spacious, and fuel-efficient sedan without sacrificing performance. Engine options include a 1.5L turbocharged four-cylinder and a 2.0L turbocharged four-cylinder, depending on trim. It features advanced safety technology, a refined interior, and responsive handling for everyday commuting.",
        },
        {
          id: 11,
          title: "Honda Civic 2022",
          url: "/honda-5.jfif",
          mileage: "48,000",
          type: "Sedan",
          transmission: "Manual / Automatic",
          price: 1340,
          description:
            "The Civic was built to provide affordable, dependable transportation with modern styling and impressive fuel economy. Depending on trim, it comes with a 2.0L naturally aspirated four-cylinder or a 1.5L turbocharged four-cylinder engine. Its comfortable cabin, updated infotainment system, and safety features make it a practical daily driver.",
        },
        {
          id: 12,
          title: "Honda Civic Si 2023",
          url: "/honda-6.jfif",
          mileage: "48,000",
          type: "Sedan",
          transmission: "Manual",
          price: 7405,
          description:
            "The Civic Si was created for drivers who want affordable performance in a practical compact sedan. It features a 1.5L turbocharged four-cylinder engine, a six-speed manual transmission, and a limited-slip differential. Sport-tuned suspension, sport seats, and responsive handling give it a more engaging personality than the standard Civic.",
        },
        {
          id: 13,
          title: "Acura ILX 2022",
          url: "/acura-1.jfif",
          mileage: "48,000",
          type: "Sedan",
          transmission: "Automatic",
          price: 70850,
          description:
            "The ILX was designed as an entry point into Acura's luxury lineup, combining everyday practicality with premium features. It uses a 2.4L naturally aspirated four-cylinder engine paired with an eight-speed dual-clutch automatic transmission. Its comfortable interior, refined styling, and manageable size make it ideal for drivers entering the luxury sedan market.",
        },
        {
          id: 14,
          title: "Acura Integra Type S 2025",
          url: "/acura-2.png",
          mileage: "48,000",
          type: "Sedan",
          transmission: "Manual",
          price: 80930,
          description:
            "The Integra Type S was engineered to deliver high-performance driving while maintaining everyday comfort and practicality. It features a 2.0L turbocharged four-cylinder engine producing 320 horsepower, paired with a six-speed manual transmission. Its performance brakes, sport-tuned suspension, aggressive bodywork, and limited-slip differential make it a serious enthusiast-focused vehicle.",
        },
        {
          id: 15,
          title: "Acura Integra 2024",
          url: "/acura-3.jfif",
          mileage: "48,000",
          type: "Sedan",
          transmission: "Manual / Automatic",
          price: 14599,
          description:
            "The Integra was reintroduced to offer a blend of sporty styling, premium comfort, and everyday versatility. Its standard engine is a 1.5L turbocharged four-cylinder, with a continuously variable automatic transmission or an available six-speed manual. A spacious liftback design, modern infotainment, and refined interior make it suitable for drivers wanting luxury and practicality.",
        },
        {
          id: 16,
          title: "Acura NSX Type S 2022",
          url: "/acura-4.jpg",
          mileage: "48,000",
          type: "Coupe",
          transmission: "Automatic",
          price: 100000,
          description:
            "The NSX Type S was created to showcase Acura's advanced hybrid performance engineering and celebrate the final year of the second-generation NSX. It combines a twin-turbocharged 3.5L V6 engine with three electric motors, producing a combined 600 horsepower. Its all-wheel-drive hybrid system, lightweight construction, and advanced aerodynamics deliver supercar-level performance.",
        },
        {
          id: 17,
          title: "Acura ADX 2026",
          url: "/acura-5.jfif",
          mileage: "48,000",
          type: "SUV",
          transmission: "Automatic",
          price: 30999,
          description:
            "The ADX was introduced as an accessible entry-level luxury SUV for drivers seeking premium features in a compact package. It uses a 1.5L turbocharged four-cylinder engine paired with a continuously variable transmission. Its modern cabin, touchscreen technology, available all-wheel drive, and practical cargo space make it suitable for urban driving and everyday family use.",
        },
        {
          id: 18,
          title: "Acura MDX 2022",
          url: "/acura-6.jfif",
          mileage: "48,000",
          type: "SUV",
          transmission: "Automatic",
          price: 4980,
          description:
            "The MDX was designed as a premium three-row SUV offering family-friendly space alongside luxury and performance. Standard models feature a 3.5L naturally aspirated V6 engine, while the Type S offers a 3.0L turbocharged V6. Its available Super Handling All-Wheel Drive, advanced driver assistance systems, and upscale interior make it a versatile luxury SUV.",
        },
        {
          id: 19,
          title: "Lexus IS 350 F Sport 2021",
          url: "/lexus-1.jfif",
          mileage: "48,000",
          type: "Sedan",
          transmission: "Automatic",
          price: 3970,
          description:
            "The IS 350 F Sport was developed to combine Lexus luxury with a more aggressive and engaging driving experience. It features a 3.5L naturally aspirated V6 engine producing 311 horsepower, along with sport-tuned suspension, distinctive F Sport styling, and performance-inspired interior details. It targets drivers who want a comfortable luxury sedan with athletic handling.",
        },
        {
          id: 20,
          title: "Lexus RX 350 2020",
          url: "/lexus-2.jfif",
          mileage: "48,000",
          type: "SUV",
          transmission: "Automatic",
          price: 70999,
          description:
            "The RX 350 was designed for drivers seeking a balance of luxury, comfort, and everyday practicality. It uses a 3.5L naturally aspirated V6 engine producing 295 horsepower. Its quiet cabin, premium materials, advanced safety technology, and spacious seating make it a popular choice for families wanting a refined luxury SUV.",
        },
        {
          id: 21,
          title: "Lexus LFA 2012",
          url: "/lexus-3.jfif",
          mileage: "48,000",
          type: "Coupe",
          transmission: "Automatic",
          price: 100000,
          description:
            "The LFA was created as a limited-production supercar to demonstrate Lexus's engineering capabilities and establish its performance credentials. It features a naturally aspirated 4.8L V10 engine producing 552 horsepower, paired with a six-speed automated sequential transmission. Its carbon-fiber construction, precision handling, and distinctive high-revving engine make it one of Lexus's most iconic performance vehicles.",
        },
        {
          id: 22,
          title: "Lexus GX 2025",
          url: "/lexus-4.jfif",
          mileage: "48,000",
          type: "SUV",
          transmission: "Automatic",
          price: 32820,
          description:
            "The GX was engineered for drivers who want luxury combined with serious off-road capability. The redesigned 2025 GX 550 features a 3.4L twin-turbocharged V6 engine producing 349 horsepower, paired with a ten-speed automatic transmission and full-time four-wheel drive. Its body-on-frame construction, available off-road equipment, and premium interior make it capable on rugged terrain while remaining comfortable on the road.",
        },
        {
          id: 23,
          title: "Lexus 2023 IS 350",
          url: "/lexus-5.jfif",
          mileage: "48,000",
          type: "Sedan",
          transmission: "Automatic",
          price: 12578,
          description:
            "The IS 350 was built to provide a premium sports-sedan experience with dependable engineering and everyday comfort. It features a 3.5L naturally aspirated V6 engine producing 311 horsepower. Its rear-wheel-drive platform, available all-wheel drive, refined interior, and advanced safety features make it a strong option for drivers wanting luxury with responsive performance.",
        },
        {
          id: 24,
          title: "Lexus IS 500 F Sport 2022",
          url: "/lexus-6.jfif",
          mileage: "48,000",
          type: "Sedan",
          transmission: "Automatic",
          price: 30995,
          description:
            "The IS 500 F Sport was developed for enthusiasts who want traditional V8 performance in a luxury sport sedan. It features a naturally aspirated 5.0L V8 engine producing 472 horsepower, paired with an eight-speed automatic transmission and rear-wheel drive. Its aggressive styling, sport-tuned suspension, and powerful engine deliver a blend of everyday comfort and old-school performance.",
        },
      ];
      cachedCars = cars;
      resolve(cachedCars);
    }, 2000);
  });
}

export function hasCachedCars() {
  return cachedCars !== null
}
