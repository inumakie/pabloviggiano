const textContent = {
    en: {
      nav1: 'about me',
      nav2: 'skills',
      nav3: 'projects',
      nav4: 'contact',
  
      about: 'About me',
      aboutText: `I'm a self-taught web developer from Buenos Aires, Argentina.

      With over 3 years of experience as a freelance full-stack developer, I am now looking to work within a company. My experience includes web design, development, testing, and hosting.
      
      On the front-end, I focus on modern and intuitive interfaces using responsive design to ensure the content adapts to users' screen sizes. On the back-end, I specialize in optimizing performance and ensuring swift response times.
      
      Currently, I am learning React Native and animation libraries.`,
  
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      code: 'code',
      website: 'website',

      projectsData: [
        {
            name: 'ONLINE STORE',
            desc: `A tech e-commerce with cart, payment and checkout functionalities. The owner can edit the products, payment and shipping options using commerce.js' simple store editor. You can make a fake purchase using the numbers "42" repeatedly for all the card info (& any address data).`,
            tech: ["HTML5", "CSS3", "JavaScript", "React.js", "MaterialUI", "styled-components", "stripe API", "commerce.js"],
            src: "./assets/yuestore.png",
            link: "https://yuestore.netlify.app/",
            repo: "https://github.com/inumakie/yuestore",
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

        Con más de 3 años de experiencia como desarrollador freelance, ahora busco trabajar dentro de una empresa. Mi experiencia incluye diseño web, desarrollo, testing y hosting.
        
        En front-end, construyo interfaces modernas e intuitivas, usando diseño responsive para asegurar que el contenido se adapte al tamaño de pantalla del usuario. En back-end, me especializo en optimizar el rendimiento para garantizar tiempos de respuesta fluidos.
        
        Estoy aprendiendo React Native y librerías de animación.
        `,
    
        skills: 'Conocimientos',
        projects: 'Proyectos',
        contact: 'Contacto',
        code: 'código',
        website: 'website',

        projectsData: [
          {
              name: 'TIENDA ONLINE',
              desc: `Una tienda online con funcionalidad de carrito, procesamiento de orden y pagos. El administrador puede editar los productos, opciones de pago y de envío mediante su cuenta
              en la página de commerce.js. Puedes probar el sitio haciendo una compra falsa ingresando
              cualquier dato en los datos personales y usando '42' repetidamente para la información
              de la tarjeta de crédito.`,
              tech: ["HTML5", "CSS3", "JavaScript", "React.js", "MaterialUI", "styled-components", "stripe API", "commerce.js"],
              src: "./assets/yuestore.png",
              link: "https://yuestore.netlify.app/",
              repo: "https://github.com/inumakie/yuestore",
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
