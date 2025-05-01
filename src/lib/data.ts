export interface Review {
    name: string;
    description: string;
  }
  
  export interface Book {
    id: number;
    title: string;
    author: string;
    pages: number;
    category: string;
    price: number;
    homeDelivery: boolean;
    onlineFormat: boolean;
    synopsis: string;
    coverImage: string;
    reviews: Review[];
  }
  
  export const mockBooks: Book[] = [
    {
      id: 1,
      title: "El nombre del viento",
      author: "Patrick Rothfuss",
      pages: 662,
      category: "Fantasía",
      price: 24.99,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "La historia del legendario asesino de reyes, narrada desde su infancia hasta su presente como posadero, revelando los misterios que se esconden tras su leyenda.",
      coverImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      reviews: [
        {
          name: "María García",
          description: "Una narrativa fascinante que te atrapa desde la primera página. Los personajes están increíblemente bien desarrollados."
        },
        {
          name: "Juan Rodríguez",
          description: "La construcción del mundo es impresionante, con un sistema de magia único y bien explicado. Rothfuss es un maestro del lenguaje."
        }
      ]
    },
    {
      id: 2,
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      pages: 432,
      category: "Realismo mágico",
      price: 19.95,
      homeDelivery: true,
      onlineFormat: false,
      synopsis: "La historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo, mezclando realidad y fantasía en una obra maestra del realismo mágico.",
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      reviews: [
        {
          name: "Ana Martínez",
          description: "Una obra maestra de la literatura que debe ser leída por todos. La forma en que García Márquez entrelaza lo mágico con lo cotidiano es simplemente genial."
        }
      ]
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      pages: 328,
      category: "Distopía",
      price: 15.50,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "En un futuro totalitario y opresivo, Winston Smith lucha por la libertad de pensamiento y el amor en un mundo vigilado por el Gran Hermano.",
      coverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      reviews: [
        {
          name: "Pedro Sánchez",
          description: "Una novela escalofriante que se siente cada vez más relevante. La visión de Orwell sobre la vigilancia y el control del pensamiento es profética."
        },
        {
          name: "Laura Gómez",
          description: "Un clásico imprescindible que te hace reflexionar sobre la libertad y el poder. Orwell creó un mundo que, aunque distópico, resulta terriblemente familiar."
        }
      ]
    },
    {
      id: 4,
      title: "Orgullo y prejuicio",
      author: "Jane Austen",
      pages: 432,
      category: "Clásico",
      price: 12.99,
      homeDelivery: false,
      onlineFormat: true,
      synopsis: "La historia de Elizabeth Bennet y Mr. Darcy, cuyo orgullo y prejuicios mutuos amenazan con separarlos a pesar de su atracción.",
      coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      reviews: [
        {
          name: "Isabel Jiménez",
          description: "Una delicia de lectura con personajes memorables y diálogos ingeniosos. La evolución de Elizabeth y Darcy es magistral."
        }
      ]
    },
    {
      id: 5,
      title: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
      pages: 863,
      category: "Clásico",
      price: 29.99,
      homeDelivery: true,
      onlineFormat: false,
      synopsis: "Las aventuras de un hidalgo que, enloquecido por la lectura de novelas de caballería, decide convertirse en caballero andante y recorrer España en busca de hazañas.",
      coverImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      reviews: [
        {
          name: "Carlos Fernández",
          description: "La primera novela moderna sigue siendo relevante y divertida siglos después. Cervantes creó personajes inolvidables."
        }
      ]
    },
    {
      id: 6,
      title: "La sombra del viento",
      author: "Carlos Ruiz Zafón",
      pages: 544,
      category: "Misterio",
      price: 22.50,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "En la Barcelona de posguerra, un joven Daniel Sempere descubre un libro maldito y se embarca en una búsqueda para encontrar otros trabajos del enigmático autor.",
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      reviews: [
        {
          name: "Elena López",
          description: "Una novela fascinante que combina misterio, romance y un homenaje a los libros. La Barcelona que describe Zafón es casi un personaje más."
        },
        {
          name: "Roberto Díaz",
          description: "Una historia dentro de historias que te mantiene enganchado hasta la última página. El Cementerio de los Libros Olvidados es una creación brillante."
        }
      ]
    },
    {
      id: 7,
      title: "Matar a un ruiseñor",
      author: "Harper Lee",
      pages: 376,
      category: "Novela social",
      price: 18.75,
      homeDelivery: false,
      onlineFormat: true,
      synopsis: "A través de los ojos de Scout Finch, una niña de Alabama, presenciamos el juicio de un hombre negro acusado injustamente y la integridad de su padre abogado.",
      coverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      reviews: [
        {
          name: "Carmen Rodríguez",
          description: "Un poderoso retrato del racismo en el sur de Estados Unidos que sigue siendo relevante. Atticus Finch es uno de los mejores personajes de la literatura."
        }
      ]
    },
    {
      id: 8,
      title: "Harry Potter y la piedra filosofal",
      author: "J.K. Rowling",
      pages: 309,
      category: "Fantasía",
      price: 17.99,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "Harry Potter descubre en su undécimo cumpleaños que es hijo de dos poderosos magos y que posee poderes mágicos. En Hogwarts comenzará a aprender a utilizar la magia y a enfrentarse a su destino.",
      coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      reviews: [
        {
          name: "Pablo Martín",
          description: "El inicio perfecto para una saga maravillosa. Rowling crea un mundo mágico detallado y personajes entrañables que te acompañan para siempre."
        },
        {
          name: "Sara Vázquez",
          description: "Un libro que me enamoró de la lectura. La historia de Harry es cautivadora para todas las edades."
        }
      ]
    },
    {
      id: 9,
      title: "El gran Gatsby",
      author: "F. Scott Fitzgerald",
      pages: 218,
      category: "Clásico",
      price: 14.50,
      homeDelivery: true,
      onlineFormat: false,
      synopsis: "A través de los ojos de Nick Carraway, exploramos el mundo de la alta sociedad en los años 20 y la obsesión del misterioso Jay Gatsby por recuperar a su amor perdido, Daisy Buchanan.",
      coverImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      reviews: [
        {
          name: "David González",
          description: "Una crítica brillante al sueño americano con una prosa hermosa y evocadora. Gatsby es un personaje fascinante y trágico."
        }
      ]
    },
    {
      id: 10,
      title: "La metamorfosis",
      author: "Franz Kafka",
      pages: 82,
      category: "Literatura universal",
      price: 9.99,
      homeDelivery: false,
      onlineFormat: true,
      synopsis: "Gregor Samsa se despierta una mañana convertido en un enorme insecto. La novela explora su adaptación a esta nueva condición y la reacción de su familia.",
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      reviews: [
        {
          name: "Marta Jiménez",
          description: "Una alegoría poderosa sobre la alienación y la deshumanización. La transformación física de Gregor refleja una realidad psicológica profunda."
        },
        {
          name: "Javier Torres",
          description: "Impactante y angustiosa, esta obra corta te deja pensando durante días. Kafka tiene un estilo único que te atrapa en una pesadilla lúcida."
        }
      ]
    },
    {
      id: 11,
      title: "Los juegos del hambre",
      author: "Suzanne Collins",
      pages: 374,
      category: "Distopía",
      price: 16.99,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "En un futuro distópico, el Capitolio de Panem mantiene su control sobre doce distritos obligándolos a seleccionar a un niño y una niña para participar en los Juegos del Hambre, una competición televisada donde solo uno puede sobrevivir.",
      coverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      reviews: [
        {
          name: "Raquel Moreno",
          description: "Una novela adictiva con una protagonista fuerte y determinada. El mensaje político subyacente es tan relevante como la acción."
        }
      ]
    },
    {
      id: 12,
      title: "Rayuela",
      author: "Julio Cortázar",
      pages: 635,
      category: "Literatura experimental",
      price: 23.50,
      homeDelivery: false,
      onlineFormat: false,
      synopsis: "Una novela que puede leerse de múltiples formas, siguiendo el orden tradicional o saltando capítulos según una tabla de direcciones, explorando la vida de Horacio Oliveira entre París y Buenos Aires.",
      coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      reviews: [
        {
          name: "Lucía Fernández",
          description: "Una obra maestra que rompe las reglas de la narrativa tradicional. Cortázar te invita a ser cómplice en la creación del significado."
        }
      ]
    },
    {
      id: 13,
      title: "El Hobbit",
      author: "J.R.R. Tolkien",
      pages: 310,
      category: "Fantasía",
      price: 21.00,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "Bilbo Bolsón, un hobbit que disfruta de una cómoda vida sin ambiciones, se ve arrastrado a una épica búsqueda por el mago Gandalf y un grupo de enanos para recuperar un tesoro custodiado por un dragón.",
      coverImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      reviews: [
        {
          name: "Alberto Sanz",
          description: "Una aventura perfecta que sienta las bases para El Señor de los Anillos. Tolkien crea un mundo tan detallado que parece real."
        },
        {
          name: "Marina Castro",
          description: "Un clásico de la literatura fantástica que no pasa de moda. El viaje del héroe contado de forma magistral."
        }
      ]
    },
    {
      id: 14,
      title: "Crimen y castigo",
      author: "Fiódor Dostoyevski",
      pages: 551,
      category: "Clásico",
      price: 20.25,
      homeDelivery: true,
      onlineFormat: false,
      synopsis: "Rodión Raskólnikov, un estudiante en la miseria, planea y ejecuta el asesinato de una anciana prestamista, justificándolo como un acto de utilidad social, pero pronto comienza a sentir el peso del remordimiento.",
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      reviews: [
        {
          name: "Adrián López",
          description: "Un profundo análisis psicológico del crimen y la culpa. Dostoyevski nos sumerge en la mente atormentada de Raskólnikov de forma magistral."
        }
      ]
    },
    {
      id: 15,
      title: "Los detectives salvajes",
      author: "Roberto Bolaño",
      pages: 609,
      category: "Literatura contemporánea",
      price: 24.90,
      homeDelivery: false,
      onlineFormat: true,
      synopsis: "Un grupo de jóvenes poetas mexicanos, los 'realistas viscerales', buscan a una poeta misteriosa desaparecida en el desierto de Sonora. La novela sigue sus vidas a lo largo de 20 años.",
      coverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      reviews: [
        {
          name: "Diego Ramírez",
          description: "Una obra monumental sobre la literatura, la juventud y Latinoamérica. Bolaño crea una narrativa fragmentada pero hipnótica."
        },
        {
          name: "Natalia Vega",
          description: "Un libro que desafía las convenciones literarias y te arrastra a un viaje por el mundo. Los personajes se quedan contigo mucho después de terminar la lectura."
        }
      ]
    },
    {
      id: 16,
      title: "Dune",
      author: "Frank Herbert",
      pages: 658,
      category: "Ciencia ficción",
      price: 26.50,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "En un futuro lejano, las casas nobles compiten por el control del planeta desértico Arrakis, fuente de una especia valiosa. Paul Atreides, heredero de la Casa Atreides, se encuentra en el centro de una profecía galáctica.",
      coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      reviews: [
        {
          name: "Sergio Domínguez",
          description: "La obra maestra definitiva de la ciencia ficción. Herbert crea un universo rico en política, religión y ecología."
        }
      ]
    },
    {
      id: 17,
      title: "El amor en los tiempos del cólera",
      author: "Gabriel García Márquez",
      pages: 464,
      category: "Realismo mágico",
      price: 19.90,
      homeDelivery: true,
      onlineFormat: false,
      synopsis: "Florentino Ariza espera más de cincuenta años para declarar nuevamente su amor a Fermina Daza, quien rechazó su propuesta juvenil y se casó con un médico distinguido.",
      coverImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      reviews: [
        {
          name: "Teresa Blanco",
          description: "Una historia de amor que desafía el tiempo y las convenciones sociales. García Márquez escribe sobre el amor en todas sus formas con una prosa exquisita."
        },
        {
          name: "Emilio Torres",
          description: "Un retrato conmovedor de la perseverancia y la pasión. La forma en que el autor describe el Caribe es casi tangible."
        }
      ]
    },
    {
      id: 18,
      title: "Frankenstein",
      author: "Mary Shelley",
      pages: 280,
      category: "Gótico",
      price: 12.75,
      homeDelivery: false,
      onlineFormat: true,
      synopsis: "El joven científico Victor Frankenstein crea una criatura a partir de partes de cadáveres. Horrorizado por su creación, la abandona, pero la criatura regresa para atormentarlo.",
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      reviews: [
        {
          name: "Gloria Campos",
          description: "Mucho más que una historia de terror, es una profunda reflexión sobre la responsabilidad científica y la naturaleza humana. Shelley fue una visionaria."
        }
      ]
    },
    {
      id: 19,
      title: "La naranja mecánica",
      author: "Anthony Burgess",
      pages: 205,
      category: "Distopía",
      price: 15.25,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "En un futuro cercano, Alex, el líder de una pandilla de jóvenes ultraviolentos, es capturado y sometido a un tratamiento experimental de aversión a la violencia.",
      coverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      reviews: [
        {
          name: "Víctor Navarro",
          description: "Una novela perturbadora que cuestiona el libre albedrío y la naturaleza de la maldad. El lenguaje inventado, el Nadsat, añade una capa fascinante a la narrativa."
        },
        {
          name: "Olga Méndez",
          description: "Brutalmente honesta y filosóficamente compleja. Burgess crea un protagonista moralmente repugnante pero narrativamente cautivador."
        }
      ]
    },
    {
      id: 20,
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      pages: 256,
      category: "Distopía",
      price: 14.99,
      homeDelivery: true,
      onlineFormat: false,
      synopsis: "En un futuro donde los libros están prohibidos y son quemados por los 'bomberos', Guy Montag, un bombero que empieza a cuestionar su trabajo y la sociedad en la que vive.",
      coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      reviews: [
        {
          name: "Ramón Ortiz",
          description: "Una defensa apasionada de los libros y el conocimiento. Bradbury predijo con asombrosa precisión nuestra adicción actual a las pantallas y el entretenimiento vacío."
        }
      ]
    },
    {
      id: 21,
      title: "El principito",
      author: "Antoine de Saint-Exupéry",
      pages: 96,
      category: "Fábula",
      price: 10.50,
      homeDelivery: false,
      onlineFormat: true,
      synopsis: "Un piloto se encuentra con un pequeño príncipe en medio del desierto del Sahara. A través de sus conversaciones, el principito comparte las lecciones que ha aprendido en sus viajes por diferentes planetas.",
      coverImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      reviews: [
        {
          name: "Beatriz Ruiz",
          description: "Una fábula aparentemente simple que esconde profundas verdades sobre la vida y las relaciones humanas. 'Lo esencial es invisible a los ojos' resume perfectamente su mensaje."
        },
        {
          name: "Jorge Mesa",
          description: "Un libro que habla directamente al niño que todos llevamos dentro. Sus ilustraciones son tan evocadoras como el texto."
        }
      ]
    },
    {
      id: 22,
      title: "Moby Dick",
      author: "Herman Melville",
      pages: 720,
      category: "Clásico",
      price: 22.00,
      homeDelivery: true,
      onlineFormat: false,
      synopsis: "El capitán Ahab busca venganza contra Moby Dick, la ballena blanca que le arrancó la pierna. Su obsesión arrastra a toda la tripulación del Pequod en una peligrosa cacería por los océanos.",
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      reviews: [
        {
          name: "Fernando Castillo",
          description: "Una novela épica sobre la obsesión y la venganza, con una riqueza de simbolismo y filosofía. La prosa de Melville oscila entre lo práctico y lo poético."
        }
      ]
    },
    {
      id: 23,
      title: "Sapiens: De animales a dioses",
      author: "Yuval Noah Harari",
      pages: 496,
      category: "No ficción",
      price: 29.90,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "Un recorrido por la historia de la humanidad, desde la aparición de Homo sapiens hasta la actualidad, explorando cómo nuestra especie llegó a dominar el planeta.",
      coverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      reviews: [
        {
          name: "Diana Cruz",
          description: "Un libro fascinante que te hace reconsiderar todo lo que creías saber sobre la historia humana. Harari tiene un talento para explicar conceptos complejos de forma accesible."
        },
        {
          name: "Héctor Salazar",
          description: "Una visión provocadora de nuestra especie y su impacto en el planeta. Te deja pensando mucho después de terminar la última página."
        }
      ]
    },
    {
      id: 24,
      title: "Los miserables",
      author: "Victor Hugo",
      pages: 1232,
      category: "Clásico",
      price: 34.50,
      homeDelivery: false,
      onlineFormat: true,
      synopsis: "La historia de Jean Valjean, un ex convicto que intenta redimirse, mientras es perseguido por el inspector Javert. A través de múltiples personajes, la novela retrata la Francia del siglo XIX.",
      coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      reviews: [
        {
          name: "Cristina Herrera",
          description: "Una obra monumental sobre la redención, la justicia y el amor. Hugo crea un tapiz de personajes inolvidables cuyas vidas se entrelazan de formas sorprendentes."
        }
      ]
    },
    {
      id: 25,
      title: "El señor de los anillos",
      author: "J.R.R. Tolkien",
      pages: 1178,
      category: "Fantasía",
      price: 39.99,
      homeDelivery: true,
      onlineFormat: false,
      synopsis: "En la Tierra Media, el Señor Oscuro Sauron forjó un Anillo Único para esclavizar a todos. Ahora, un hobbit llamado Frodo debe emprender un peligroso viaje para destruirlo en el Monte del Destino.",
      coverImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      reviews: [
        {
          name: "Manuel Serrano",
          description: "La obra definitiva de fantasía épica, con un mundo tan rico en historia y mitología que parece real. Tolkien creó mucho más que una novela, creó todo un universo."
        },
        {
          name: "Inés Romero",
          description: "Una historia sobre la amistad, el sacrificio y la esperanza en tiempos oscuros. La profundidad de los temas tratados eleva esta obra por encima de la simple fantasía."
        }
      ]
    },
    {
      id: 26,
      title: "La casa de los espíritus",
      author: "Isabel Allende",
      pages: 442,
      category: "Realismo mágico",
      price: 18.90,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "La saga de la familia Trueba a lo largo de cuatro generaciones, desde principios del siglo XX hasta el golpe militar en Chile, entrelazando lo político con lo personal y lo mágico.",
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      reviews: [
        {
          name: "Rosa Medina",
          description: "Una novela rica en personajes femeninos fuertes y complejos. Allende tiene un don para mezclar la historia política con las historias personales y el realismo mágico."
        }
      ]
    },
    {
      id: 27,
      title: "El guardián entre el centeno",
      author: "J.D. Salinger",
      pages: 277,
      category: "Novela de formación",
      price: 13.75,
      homeDelivery: false,
      onlineFormat: true,
      synopsis: 'Holden Caulfield, expulsado de su escuela preparatoria, vaga por Nueva York durante tres días, reflexionando sobre la "falsedad" del mundo adulto y tratando de proteger la inocencia infantil.',
      coverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      reviews: [
        {
          name: "Álvaro Gil",
          description: "Una mirada auténtica y cruda a la adolescencia y la alienación. La voz única de Holden Caulfield resuena con cualquiera que haya sentido que no encaja en el mundo."
        },
        {
          name: "Silvia Durán",
          description: "Un clásico que captura perfectamente la rebeldía y confusión adolescente. La narrativa en primera persona te sumerge completamente en la mente de Holden."
        }
      ]
    },
    {
      id: 28,
      title: "Rebelión en la granja",
      author: "George Orwell",
      pages: 144,
      category: "Alegoría",
      price: 11.50,
      homeDelivery: true,
      onlineFormat: false,
      synopsis: "Los animales de una granja expulsan a los humanos y crean su propia sociedad, solo para ver cómo su revolución es traicionada por la corrupción de sus líderes.",
      coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      reviews: [
        {
          name: "Marcos Nieto",
          description: "Una alegoría brillante sobre cómo el poder corrompe. Orwell utiliza un formato aparentemente simple para transmitir verdades políticas profundas."
        }
      ]
    },
    {
      id: 29,
      title: "Las venas abiertas de América Latina",
      author: "Eduardo Galeano",
      pages: 379,
      category: "Ensayo histórico",
      price: 17.80,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "Un análisis de la explotación económica y política de América Latina desde la colonización europea hasta el siglo XX, detallando cómo las potencias extranjeras se han beneficiado de sus recursos.",
      coverImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      reviews: [
        {
          name: "Claudia Vargas",
          description: "Un libro esencial para entender la historia económica de América Latina. Galeano escribe con pasión y claridad sobre complejos procesos históricos."
        },
        {
          name: "Antonio Morales",
          description: "Una obra que te hace reconsiderar la historia oficial y ver los patrones de explotación que han moldeado un continente entero."
        }
      ]
    },
    {
      id: 30,
      title: "Pedro Páramo",
      author: "Juan Rulfo",
      pages: 144,
      category: "Realismo mágico",
      price: 10.99,
      homeDelivery: false,
      onlineFormat: true,
      synopsis: "Juan Preciado viaja a Comala para conocer a su padre, Pedro Páramo, solo para descubrir que el pueblo está habitado por fantasmas y recuerdos de un pasado dominado por su padre.",
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      reviews: [
        {
          name: "Gabriela Reyes",
          description: "Una novela breve pero inmensamente poderosa. Rulfo crea una atmósfera única donde la vida y la muerte se entrelazan en un pueblo fantasma."
        }
      ]
    },
    {
      id: 31,
      title: "El laberinto de la soledad",
      author: "Octavio Paz",
      pages: 351,
      category: "Ensayo",
      price: 16.50,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "Un análisis profundo de la identidad mexicana, explorando las máscaras, mitos y tradiciones que definen el carácter nacional y su relación con la historia y la modernidad.",
      coverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      reviews: [
        {
          name: "Mónica Fuentes",
          description: "Un ensayo luminoso sobre la mexicanidad que trasciende fronteras. Paz escribe con una profundidad filosófica y poética inigualable."
        },
        {
          name: "Ignacio Soto",
          description: "Una reflexión necesaria sobre la identidad cultural y la soledad humana. Cada relectura revela nuevas capas de significado."
        }
      ]
    },
    {
      id: 32,
      title: "Anna Karenina",
      author: "León Tolstói",
      pages: 864,
      category: "Clásico",
      price: 27.50,
      homeDelivery: true,
      onlineFormat: false,
      synopsis: "La historia entrecruzada de dos matrimonios: el de Anna Karenina y Alekséi Karenin, destruido por la pasión de Anna por el conde Vronski, y el de Konstantín Levin y Kitty Shcherbátskaya.",
      coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      reviews: [
        {
          name: "Susana Martínez",
          description: "Una novela magistral sobre el amor, el matrimonio y la sociedad. Tolstói crea personajes tan reales y complejos que parece que los conoces personalmente."
        }
      ]
    },
    {
      id: 33,
      title: "La Odisea",
      author: "Homero",
      pages: 480,
      category: "Épica",
      price: 18.25,
      homeDelivery: false,
      onlineFormat: true,
      synopsis: "Tras la Guerra de Troya, Odiseo emprende un largo viaje de regreso a Ítaca, enfrentándose a dioses, monstruos y hechiceras, mientras su esposa Penélope y su hijo Telémaco esperan su retorno.",
      coverImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      reviews: [
        {
          name: "Jaime Ponce",
          description: "El viaje heroico por excelencia que ha influido en toda la literatura occidental. Las aventuras de Odiseo siguen siendo emocionantes milenios después de su composición."
        },
        {
          name: "Luciana Vélez",
          description: "Una historia sobre el hogar, la identidad y la perseverancia. La estructura narrativa es sorprendentemente moderna para una obra tan antigua."
        }
      ]
    },
    {
      id: 34,
      title: "El túnel",
      author: "Ernesto Sabato",
      pages: 184,
      category: "Novela psicológica",
      price: 12.30,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "Juan Pablo Castel, un pintor obsesionado con una mujer que parecía entender su arte, narra desde la cárcel cómo llegó a asesinarla, explorando los celos, la obsesión y el aislamiento.",
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      reviews: [
        {
          name: "Ricardo Sosa",
          description: "Un descenso fascinante a la mente de un hombre obsesivo. Sabato utiliza una prosa precisa y directa para crear un estudio psicológico inquietante."
        }
      ]
    },
    {
      id: 35,
      title: "Crónica de una muerte anunciada",
      author: "Gabriel García Márquez",
      pages: 128,
      category: "Realismo mágico",
      price: 11.90,
      homeDelivery: false,
      onlineFormat: true,
      synopsis: "Todo el pueblo sabe que los hermanos Vicario planean matar a Santiago Nasar para vengar el honor de su hermana, pero nadie logra evitarlo. La novela reconstruye este crimen 'inevitable'.",
      coverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      reviews: [
        {
          name: "Patricia Luna",
          description: "Una novela corta pero perfectamente construida. García Márquez invierte el formato del misterio tradicional para explorar la responsabilidad colectiva."
        },
        {
          name: "Ernesto Guerra",
          description: "Un análisis brillante de cómo las convenciones sociales pueden conducir a la tragedia. La estructura narrativa que revela el final desde el principio crea una tensión única."
        }
      ]
    },
    {
      id: 36,
      title: "El alquimista",
      author: "Paulo Coelho",
      pages: 175,
      category: "Novela filosófica",
      price: 13.99,
      homeDelivery: true,
      onlineFormat: false,
      synopsis: "Santiago, un joven pastor andaluz, viaja a Egipto en busca de un tesoro, descubriendo en el camino lecciones sobre seguir los sueños y escuchar al corazón.",
      coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      reviews: [
        {
          name: "Sofía Peralta",
          description: "Una fábula inspiradora sobre la búsqueda personal. Coelho combina sabiduría espiritual con una historia accesible y universal."
        }
      ]
    },
    {
      id: 37,
      title: "El perfume",
      author: "Patrick Süskind",
      pages: 304,
      category: "Novela histórica",
      price: 16.75,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "En la Francia del siglo XVIII, Jean-Baptiste Grenouille, un hombre con un olfato extraordinario pero sin olor corporal propio, se convierte en asesino en su obsesiva búsqueda por crear el perfume perfecto.",
      coverImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      reviews: [
        {
          name: "Hugo Delgado",
          description: "Una novela sensorial única que evoca olores a través de palabras. Süskind crea un protagonista perturbador pero fascinante en un mundo histórico vívidamente recreado."
        },
        {
          name: "Eva Montero",
          description: "Una historia oscura y cautivadora que explora los límites de la obsesión. Las descripciones son tan vívidas que casi puedes oler lo que está ocurriendo."
        }
      ]
    },
    {
      id: 38,
      title: "La insoportable levedad del ser",
      author: "Milan Kundera",
      pages: 304,
      category: "Novela filosófica",
      price: 18.90,
      homeDelivery: false,
      onlineFormat: true,
      synopsis: "A través de las vidas entrelazadas de cuatro personajes en Praga durante la Primavera de Praga, Kundera explora temas como el amor, el destino, la política y el eterno retorno.",
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      reviews: [
        {
          name: "Arturo Iglesias",
          description: "Una novela profundamente filosófica que también es accesible y conmovedora. Kundera teje magistralmente ideas existenciales en una narrativa personal y política."
        }
      ]
    },
    {
      id: 39,
      title: "Ficciones",
      author: "Jorge Luis Borges",
      pages: 218,
      category: "Cuentos",
      price: 15.25,
      homeDelivery: true,
      onlineFormat: true,
      synopsis: "Una colección de cuentos que exploran laberintos literarios, paradojas filosóficas, bibliotecas infinitas y realidades alternativas, desafiando los límites entre realidad y ficción.",
      coverImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      reviews: [
        {
          name: "Cecilia Molina",
          description: "Un recorrido deslumbrante por el ingenio y la imaginación de Borges. Cada cuento es un universo complejo condensado en pocas páginas."
        },
        {
          name: "Miguel Aranda",
          description: "Una obra maestra que cambió mi forma de entender la literatura. Borges juega con el lector, desafiándolo a cada página con ideas que parecen simples pero son profundamente complejas."
        }
      ]
    },
    {
      id: 40,
      title: "El coronel no tiene quien le escriba",
      author: "Gabriel García Márquez",
      pages: 112,
      category: "Realismo mágico",
      price: 9.95,
      homeDelivery: false,
      onlineFormat: false,
      synopsis: "Un veterano coronel espera durante años la pensión prometida por sus servicios en la guerra civil colombiana, subsistiendo con su esposa enferma y un gallo de pelea heredado de su hijo asesinado.",
      coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      reviews: [
        {
          name: "Dolores Rivas",
          description: "Una novela breve pero devastadora sobre la dignidad y la esperanza en medio de la pobreza. García Márquez logra transmitir décadas de frustración y espera en pocas páginas."
        }
      ]
    }
  ];