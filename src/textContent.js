const textContent = {
    en: {
      nav1: 'about me',
      nav2: 'skills',
      nav3: 'projects',
      nav4: 'contact',
  
      about: 'About me',
      aboutText: `I am a self-taught full stack web developer from Buenos Aires, Argentina.
      I have 2 years of experience as a freelance developer and now I'm looking forwards to working with a company.
      I specialize in frontEnd, building clean + simple user interfaces based on responsive design which makes the content look good on any screen size. I also know Back End technologies and I'm currently learning frameworks for building Mobile apps.
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
        Tengo 2 a??os de experiencia como desarrollador web freelance y ahora me interesa trabajar junto a una empresa.
        Me especializo en Front End, desarrollando interfaces prolijas y simples con enfoque en dise??os responsivos que garanticen que la p??gina se vea bien en cualquier dispositivo.
        Tambi??n desarrollo en Back End y estoy aprendiendo frameworks para desarrollar aplicaciones de celular.
        Soy h??bil buscando informaci??n -como lo requiere el ser autodidacta-. Cuando no s?? algo, busco recursos y lo aprendo. Hablo ingl??s y espa??ol (+estoy aprendiendo Mandar??n).`,
    
        skills: 'Conocimientos',
        projects: 'Proyectos',
        contact: 'Contacto',
        code: 'c??digo',
        website: 'website',

        projectsData: [
          {
              name: 'TIENDA ONLINE',
              desc: `Una tienda online con funcionalidad de carrito, procesamiento de orden y pagos. El administrador puede editar los productos, opciones de pago y de env??o mediante su cuenta
              en la p??gina de commerce.js. Puedes probar el sitio haciendo una compra falsa ingresando
              cualquier dato en los datos personales y usando '42' repetidamente para la informaci??n
              de la tarjeta de cr??dito.`,
              tech: ["HTML5", "CSS3", "JavaScript", "React.js", "MaterialUI", "styled-components", "stripe API", "commerce.js"],
              src: "./assets/yuestore.png",
              link: "https://yuestore.netlify.app/",
              repo: "https://github.com/inumakie/yuestore",
              imagePosition: "h-full w-full object-cover object-left-top",
          },
          {
              name: 'RASTREADOR IP',
              desc: `Una web app responsive en la que puedes buscar cualquier direcci??n IP (o dejar el campo vac??o para usar tu propia IP) y ver la ubicaci??n aproximada en un mapa junto a algunos otros datos asociados a esa direcci??n IP.`,
              tech: ["HTML5", "CSS3", "JavaScript", "Leaflet API", "GeoIP API"],
              src: "./assets/iptracker.png",
              link: "https://inumakie.github.io/iptracker/",
              repo: "https://github.com/inumakie/iptracker",
              imagePosition: "h-full w-full object-cover object-center",
          },
          {
              name: 'P??GINA PRINCIPAL',
              desc: `P??gina principal responsive con informaci??n de empresa, tarjetas de citas, formulario de suscripci??n y secci??n de contacto`,
              tech: ["HTML5", "CSS3", "JavaScript"],
              src: "./assets/fylo.png",
              link: "https://inumakie.github.io/fylo-landing-page/",
              repo: "https://github.com/inumakie/fylo-landing-page",
              imagePosition: "h-full w-full object-cover object-left-top",
          },
          {
              name: 'P??GINA DE SUSCRIPCI??N',
              desc: `P??gina de suscripci??n responsive.`,
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
