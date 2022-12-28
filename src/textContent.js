const textContent = {
    en: {
      nav1: 'about me',
      nav2: 'skills',
      nav3: 'projects',
      nav4: 'contact',
  
      about: 'About me',
      aboutText: `I am a self-taught full stack web developer from Buenos Aires, Argentina.
      I have experience as a freelance developer and now I'm looking forwards to working in a company.
      I specialize in frontEnd, building clean + simple user interfaces based on responsive design which makes the content look good on any screen size.
      I'm skilled at research -as self-learning requires- so, when I don't know something, I go find resources and learn it. I speak English and Spanish (+ currently learning Mandarin).`,
  
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      code: 'code',
      website: 'website',

      projectsData: [
        {
            name: 'ONLINE STORE',
            desc: `A complete online store with cart, payment and checkout functionality. The owner can edit the products, payment and shipping options using commerce.js' simple store editor. you can make a fake purchase using the numbers "42" repeatedly for all the card info (& any address data).`,
            tech: ["HTML5", "CSS3", "JavaScript", "React.js", "MaterialUI", "styled-components", "stripe API", "commerce.js"],
            src: "./assets/yuestore.png",
            link: "https://yuestore.netlify.app/",
            repo: "https://github.com/inumakie/yuestore",
            imagePosition: "h-full w-full object-cover object-left-top",
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
        {
            name: 'SUBSCRIPTION PAGE',
            desc: `A simple responsive subscription page.`,
            tech: ["HTML5", "CSS3", "JavaScript"],
            src: "./assets/baseapparel.png",
            link: "https://inumakie.github.io/comingsoonpage/",
            repo: "https://github.com/inumakie/comingsoonpage",
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
        aboutText: `Soy un programador full stack autodidacta de Buenos Aires, Argentina.
        Tengo experiencia como desarrollador freelance y ahora me interesa trabajar en una empresa.
        Me especializo en front end, desarrollando interfaces prolijas y simples con enfoque en diseños responsivos que garanticen que la página se vea bien en cualquier dispositivo.
        Soy hábil buscando información -como lo requiere el ser autodidacta-. Cuando no se algo, busco recursos y lo aprendo. Hablo inglés y español (+estoy aprendiendo Mandarín).`,
    
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
              name: 'RASTREADOR IP',
              desc: `Una web app responsive en la que puedes buscar cualquier dirección IP (o dejar el campo vacío para usar tu propia IP) y ver la ubicación aproximada en un mapa junto a algunos otros datos asociados a esa dirección IP.`,
              tech: ["HTML5", "CSS3", "JavaScript", "Leaflet API", "GeoIP API"],
              src: "./assets/iptracker.png",
              link: "https://inumakie.github.io/iptracker/",
              repo: "https://github.com/inumakie/iptracker",
              imagePosition: "h-full w-full object-cover object-center",
          },
          {
              name: 'PÁGINA PRINCIPAL',
              desc: `Página principal responsive con información de empresa, tarjetas de citas, formulario de suscripción y sección de contacto`,
              tech: ["HTML5", "CSS3", "JavaScript"],
              src: "./assets/fylo.png",
              link: "https://inumakie.github.io/fylo-landing-page/",
              repo: "https://github.com/inumakie/fylo-landing-page",
              imagePosition: "h-full w-full object-cover object-left-top",
          },
          {
              name: 'PÁGINA DE SUSCRIPCIÓN',
              desc: `Página de suscripción responsive.`,
              tech: ["HTML5", "CSS3", "JavaScript"],
              src: "./assets/baseapparel.png",
              link: "https://inumakie.github.io/comingsoonpage/",
              repo: "https://github.com/inumakie/comingsoonpage",
              imagePosition: "h-full w-full object-cover object-left-top",
          },
        ],
  
    }
  }

export default textContent;