const textContent = {
    en: {
      nav1: 'about me',
      nav2: 'skills',
      nav3: 'projects',
      nav4: 'contact',
  
      about: 'About me',
      aboutText: `I'm a self-taught web developer from Buenos Aires, Argentina.

      My experience includes developing landing pages, complete websites, e-commerce sites, and custom management tools.
      
      I mainly work on Frontend, ensuring responsive design and client-side performance optimizations. I also have experience in Backend, developing business logic, APIs, authentication, database connection and configuration, among other things. Beyond development, I have experience in design, testing, deploying, and hosting, as well as devops tools (containers, cloud services, pipeline configuration).
      
      I studied programming in a self-taught manner, so I quickly adapt to new technologies and environments. I speak English and Spanish.`,
      
  
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      code: 'code',
      website: 'website',

      projectsData: [
        {
            name: 'ONLINE STORE',
            desc: `An online store with cart and order processing functionality.`,
            tech: ["PHP", "MySQL", "jQuery", "HTML5", "CSS3", "JavaScript"],
            src: "./assets/yuestore.png",
            link: "https://targetmodaweb.com/",
            repo: "https://github.com/inumakie/targetmoda",
            imagePosition: "h-full w-full object-cover object-left-top",
        },
        {
            name: 'JOB POSTINGS SITE',
            desc: `A site where users can search for IT jobs or post job offers. Functionality includes user registration, authentication and managing job offers.`,
            tech: ["php", "laravel", "MySQL", "JavaScript", "tailwindcss"],
            src: "./assets/devgigs.png",
            link: "https://joblistings-production.up.railway.app/",
            repo: "https://github.com/inumakie/joblistings",
            imagePosition: "h-full w-full object-cover object-center",
        },
        {
            name: 'IP TRACKER',
            desc: `A responsive web app where you can search for any IP (or leave the search field blank for your IP) and get the location displayed on a map with some data associated with the IP.`,
            tech: ["HTML5", "CSS3", "JavaScript", "Leaflet API", "GeoIP API"],
            src: "./assets/iptracker.png",
            link: "https://inumakie.github.io/iptracker/",
            repo: "https://github.com/inumakie/iptracker",
            imagePosition: "h-full w-full object-cover object-center",
        },
        {
            name: 'LANDING PAGE',
            desc: `A responsive landing page with company information, quote cards, suscription box and contact section.`,
            tech: ["HTML5", "CSS3", "JavaScript"],
            src: "./assets/fylo.png",
            link: "https://inumakie.github.io/fylo-landing-page/",
            repo: "https://github.com/inumakie/fylo-landing-page",
            imagePosition: "h-full w-full object-cover object-left-top",
        },
      ],


  
    },
  
    es: {
        nav1: 'sobre mi',
        nav2: 'conocimientos',
        nav3: 'proyectos',
        nav4: 'contacto',
    
        about: 'Sobre mi',
        aboutText: `Soy un desarrollador web full-stack de Buenos Aires, Argentina.

        Mi experiencia incluye desarrollo de landing pages, webs completas, sitios e-commerce y
        herramientas personalizadas de gestion.
        
        Trabajo principalmente en Frontend, garantizando diseño responsive y optimizaciones de performance del lado del cliente. También tengo experiencia en Backend, desarrollando lógica de negocios, APIs, autenticación, conexión y configuración de base de datos, entre otras cosas. Por fuera del desarrollo, tengo experiencia en diseño, testing, deploying y hosting, así como herramientas devops (containers, servicios cloud, configuración de pipelines).

        Estudie programación de manera autodidacta, por lo que me adapto rápidamente a nuevas
        tecnologías y entornos.
        `,
    
        skills: 'Conocimientos',
        projects: 'Proyectos',
        contact: 'Contacto',
        code: 'código',
        website: 'website',

        projectsData: [
          {
              name: 'TIENDA ONLINE',
              desc: `Una tienda online con funcionalidad de carrito y procesamiento de pedidos.`,
              tech: ["PHP", "MySQL", "jQuery", "HTML5", "CSS3", "JavaScript"],
              link: "https://targetmodaweb.com/",
              link: "https://yuestore.netlify.app/",
              repo: "https://github.com/inumakie/targetmoda",
              imagePosition: "h-full w-full object-cover object-left-top",
          },
          {
            name: 'TABLERO DE EMPLEOS',
            desc: `Un sitio en donde los usuarios pueden buscar trabajos de IT o publicar empleos. La funcionalidad incluye registro, autenticación de usuario y edición de publicaciones.`,
            tech: ["php", "laravel", "MySQL", "JavaScript", "tailwindcss"],
            src: "./assets/devgigs.png",
            link: "https://joblistings-production.up.railway.app/",
            repo: "https://github.com/inumakie/joblistings",
            imagePosition: "h-full w-full object-cover object-center",
          },
          {
              name: 'RASTREADOR IP',
              desc: `Una web app responsive en la que puedes buscar cualquier dirección IP (o dejar el campo vacío para usar tu propia IP) y ver la ubicación aproximada en un mapa junto a algunos otros datos asociados a esa dirección IP.`,
              tech: ["HTML5", "CSS3", "JavaScript", "Leaflet API", "GeoIP API"],
              src: "./assets/iptracker.png",
              link: "https://inumakie.github.io/iptracker/",
              repo: "https://github.com/inumakie/iptracker",
              imagePosition: "h-full w-full object-cover object-center",
          },
          {
              name: 'LANDING PAGE',
              desc: `Landing page responsive con información de empresa, tarjetas de citas, formulario de suscripción y sección de contacto.`,
              tech: ["HTML5", "CSS3", "JavaScript"],
              src: "./assets/fylo.png",
              link: "https://inumakie.github.io/fylo-landing-page/",
              repo: "https://github.com/inumakie/fylo-landing-page",
              imagePosition: "h-full w-full object-cover object-left-top",
          }
        ],
  
    }
  }

export default textContent;
