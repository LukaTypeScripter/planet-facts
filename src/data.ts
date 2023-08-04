import {
    planetMercury,
    planetMercuryInternal,
    geologyMercury,
    planetVenus,
    planetVenusInternal,
    geologyVenus,
    planetEarth,
    planetEarthInternal,
    geologyEarth,
    planetMars,
    planetMarsInternal,
    geologyMars,
    planetJupiter,
    planetJupiterInternal,
    geologyJupiter,
    planetSaturn,
    planetSaturnInternal,
    geologySaturn,
    planetUranus,
    planetUranusInternal,
    geologyUranus,
    planetNeptune,
    planetNeptuneInternal,
    geologyNeptune,
  } from './assets/index';
  interface Overview {
    content: string;
    source: string;
  }
  
  interface Structure {
    content: string;
    source: string;
  }
  
  interface Geology {
    content: string;
    source: string;
  }
  
  interface PlanetImage {
    planet: string;
    internal: string;
    geology: string;
  }
  
  export interface PlanetData {
    name: string;
    overview: Overview;
    structure: Structure;
    geology: Geology;
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: PlanetImage;
  }
  export const data = [
    {
      "name": "Mercury",
      "overview": {
        "content": "Mercury is the smallest planet in the Solar System and the closest to the Sun...",
        "source": "https://en.wikipedia.org/wiki/Mercury_(planet)"
      },
      "structure": {
        "content": "Mercury appears to have a solid silicate crust and mantle overlying a solid...",
        "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
      },
      "geology": {
        "content": "Mercury's surface is similar in appearance to that of the Moon...",
        "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
      },
      "rotation": "58.6 Days",
      "revolution": "87.97 Days",
      "radius": "2,439.7 KM",
      "temperature": "430°c",
      "images": {
        "planet": planetMercury,
        "internal": planetMercuryInternal,
        "geology": geologyMercury
      }
    },
    {
      "name": "Venus",
      "overview": {
        "content": "Venus is the second planet from the Sun. It is named after the Roman goddess...",
        "source": "https://en.wikipedia.org/wiki/Venus"
      },
      "structure": {
        "content": "The similarity in size and density between Venus and Earth suggests they share...",
        "source": "https://en.wikipedia.org/wiki/Venus#Internal_structure"
      },
      "geology": {
        "content": "Much of the Venusian surface appears to have been shaped by volcanic activity...",
        "source": "https://en.wikipedia.org/wiki/Venus#Surface_geology"
      },
      "rotation": "243 Days",
      "revolution": "224.7 Days",
      "radius": "6,051.8 KM",
      "temperature": "471°c",
      "images": {
        "planet": planetVenus,
        "internal": planetVenusInternal,
        "geology": geologyVenus
      }
    },
    {
      "name": "Earth",
      "overview": {
        "content": "Third planet from the Sun and the only known planet to harbor life. About 29.2%...",
        "source": "https://en.wikipedia.org/wiki/Earth"
      },
      "structure": {
        "content": "Earth's interior, like that of the other terrestrial planets, is divided into...",
        "source": "https://en.wikipedia.org/wiki/Earth#Internal_structure"
      },
      "geology": {
        "content": "The total surface area of Earth is about 510 million km2. The continental crust...",
        "source": "https://en.wikipedia.org/wiki/Earth#Surface"
      },
      "rotation": "0.99 Days",
      "revolution": "365.26 Days",
      "radius": "6,371 KM",
      "temperature": "16°c",
      "images": {
        "planet": planetEarth,
        "internal": planetEarthInternal,
        "geology": geologyEarth
      }
    },
    {
      "name": "Mars",
      "overview": {
        "content": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar...",
        "source": "https://en.wikipedia.org/wiki/Mars"
      },
      "structure": {
        "content": "Like Earth, Mars has differentiated into a dense metallic core overlaid by less...",
        "source": "https://en.wikipedia.org/wiki/Mars#Internal_structure"
      },
      "geology": {
        "content": "Mars is a terrestrial planet whose surface consists of minerals containing silicon...",
        "source": "https://en.wikipedia.org/wiki/Mars#Surface_geology"
      },
      "rotation": "1.03 Days",
      "revolution": "1.88 Years",
      "radius": "3,389.5 KM",
      "temperature": "-28°c",
      "images": {
        "planet": planetMars,
        "internal": planetMarsInternal,
        "geology": geologyMars
      }
    },
    {
      "name": "Jupiter",
      "overview": {
        "content": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is...",
        "source": "https://en.wikipedia.org/wiki/Jupiter"
      },
      "structure": {
        "content": "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that...",
        "source": "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
      },
      "geology": {
        "content": "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic...",
        "source": "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
      },
      "rotation": "9.93 Hours",
      "revolution": "11.86 Years",
      "radius": "69,911 KM",
      "temperature": "-108°c",
      "images": {
        "planet": planetJupiter,
        "internal": planetJupiterInternal,
        "geology": geologyJupiter
      }
    },
    {
      "name": "Saturn",
      "overview": {
        "content": "Saturn is the sixth planet from the Sun and the second-largest in the Solar System...",
        "source": "https://en.wikipedia.org/wiki/Saturn"
      },
      "structure": {
        "content": "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in...",
        "source": "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
      },
      "geology": {
        "content": "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium...",
        "source": "https://en.wikipedia.org/wiki/Saturn#Atmosphere"
      },
      "rotation": "10.8 Hours",
      "revolution": "29.46 Years",
      "radius": "58,232 KM",
      "temperature": "-138°c",
      "images": {
        "planet": planetSaturn,
        "internal": planetSaturnInternal,
        "geology": geologySaturn
      }
    },
    {
      "name": "Uranus",
      "overview": {
        "content": "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god...",
        "source": "https://en.wikipedia.org/wiki/Uranus"
      },
      "structure": {
        "content": "The standard model of Uranus's structure is that it consists of three layers: a...",
        "source": "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
      },
      "geology": {
        "content": "The composition of Uranus's atmosphere is different from its bulk, consisting mainly...",
        "source": "https://en.wikipedia.org/wiki/Uranus#Atmosphere"
      },
      "rotation": "17.2 Hours",
      "revolution": "84 Years",
      "radius": "25,362 KM",
      "temperature": "-195°c",
      "images": {
        "planet": planetUranus,
        "internal": planetUranusInternal,
        "geology": geologyUranus
      }
    },
    {
      "name": "Neptune",
      "overview": {
        "content": "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar...",
        "source": "https://en.wikipedia.org/wiki/Neptune"
      },
      "structure": {
        "content": "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about...",
        "source": "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
      },
      "geology": {
        "content": "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is...",
        "source": "https://en.wikipedia.org/wiki/Neptune#Atmosphere"
      },
      "rotation": "16.08 Hours",
      "revolution": "164.79 Years",
      "radius": "24,622 KM",
      "temperature": "-201°c",
      "images": {
        "planet": planetNeptune,
        "internal": planetNeptuneInternal,
        "geology": geologyNeptune
      }
    }
  ];
  