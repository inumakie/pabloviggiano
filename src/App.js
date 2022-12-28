import './App.css';
import { useState, useEffect } from 'react';
import textContent from './textContent';
import iconsData from './iconsData';
import email from './assets/email.svg';
import menu from './assets/menu.svg';
import dark from './assets/light.svg';
import light from './assets/dark.svg';
import pablo from './assets/pablo.png';
import link from './assets/link.svg';
import arrow from './assets/arrow.svg';

const initialLanguage = 'en';

function App() {

  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(textContent[language]);
  const [active, setActive] = useState(true);
  const [theme, setTheme] = useState(light);
  
  const handleLanguage = (e) => {
    if (e.target.value === "es"){
      setLanguage("es");
      setTexts(textContent.es);
    } else {
      setLanguage("en");
      setTexts(textContent.en);
    }
  }

  const handleMenuToggle = () => {
    setActive(!active);
  }

  const handleThemeChange = () => {
    (theme === light) ? setTheme(dark) : setTheme(light);
  }

  useEffect(() => {
    if(theme === dark){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  return (

    <div className="bg-gray-300 flex flex-col items-center gap-10 dark:bg-gray-900 bg:text-neutral-200" id="maincontent">
    <img src={arrow} alt="" className='bg-orange-300 rounded-full p-2 h-10 fixed right-10 bottom-10 hover:cursor-pointer' onClick={() => {window.scrollTo(0, 0)}}/>


    {/* -------------------- NAVBAR -------------------- */}

      <nav className='w-full flex mb:flex-col items-center justify-items-center lg:flex-row bg-slate-200 dark:bg-slate-800'>
        
        <img src={menu} className='md:hidden h-8 m-2 text-orange-800 ' alt="" onClick={handleMenuToggle}/>

        <ul className={active ? "nav-links" : "hidden"}>
          <li className='nav-item'><a href="#about">{texts.nav1}</a></li>
          <li className='nav-item'><a href="#knowledge">{texts.nav2}</a></li>
          <li className='nav-item'><a href="#projects">{texts.nav3}</a></li>
          <li className='nav-item'><a href="#contact">{texts.nav4}</a></li>
        </ul>
      
        <div className='flex justify-center'>
          <select name="lang" id="lang" onChange={handleLanguage} className="w-20 m-5 rounded-full px-3 dark:bg-slate-600 dark:text-slate-300">
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>

          <img src={theme} className='h-8 m-5 mx-10 hover:cursor-pointer' alt="" onClick={handleThemeChange} />
        </div>

      </nav>
      
    {/* -------------------- ABOUT -------------------- */}

      <section id="about" className='mb:w-full md:w-2/3 flex flex-col items-center my-20'>
        <h1 className= "font-bold text-orange-600 text-center text-4xl p-5">Pablo Sebastian Viggiano</h1>
        <img src={pablo} alt="" className="rounded-full w-52 center p-6"/>
        <p className="bg-neutral-200 rounded-lg text-left mb:p-10 md:p-20 dark:bg-slate-700 dark:text-neutral-100">
            {texts.aboutText}
        </p>
      </section>


      {/* -------------------- SKILLS -------------------- */}

      <section id="knowledge" className='mb:full md:w-3/4 rounded-lg bg-neutral-200 dark:bg-slate-400 mb-20'>

        <h1 className='bg-orange-200 font-bold text-orange-600 text-center text-4xl p-5 dark:bg-slate-800'>{texts.skills}</h1>

        <div className='flex justify-around'>
          <div className='w-1/2 p-5'>
            <h2 className='font-bold text-center text-orange-600 p-4'>Front end</h2>
            {iconsData.frontend.map(icon => 
              <img className='h-16 m-5 inline' src={icon.source} alt="" title={icon.name} key={icon.name} />
            )}
          </div>
          
          <div className='w-1/2 p-5'>
            <h2 className='font-bold text-center text-orange-600 p-4'>Back end</h2>
            {iconsData.backend.map(icon => 
              <img className='h-16 m-5 inline' src={icon.source} alt="" title={icon.name} key={icon.name} />
            )}
          </div>
        </div>
  
      </section>



      {/* -------------------- PROJECTS -------------------- */}

      <section id="projects" className='flex flex-col mb-20'>

        <h1 className='bg-orange-200 font-bold text-orange-600 text-center text-4xl p-5 dark:bg-slate-800'>{texts.projects}</h1>

        <div className='h-fit flex flex-col items-center justify-around bg-violet-400 dark:bg-gray-900 mb:gap-10 md:gap-0'>
        {
          texts.projectsData.map(item =>(

            <div className="projects-container" key={item.name}>
              <div className='mb:w-full mb:p-1 md:p-4 md:w-1/2 h-96  bg-zinc-800'>
                <img src={require(`${item.src}`)} alt="s" className={item.imagePosition}/>
              </div>
    
              <div className='mb:w-full h-full md:w-1/2 p-10 flex bg-neutral-200 dark:bg-slate-700 dark:text-slate-200'>
                <ul className='flex flex-col justify-center gap-5'>
                  <li><h2 className='font-bold'>{item.name}</h2></li>
                  <li><p>{item.desc}</p></li>
    
                  <li>
                    <ul className='flex gap-2 flex-wrap'>
                      {item.tech.map(item => <li className='bg-orange-200 p-2 rounded dark:bg-violet-500'>{item}</li>)}
                    </ul>
                  </li>
    
                  <li className='flex gap-2'>
                    <a href={item.link} target='_blank' title={"Open website in new window"}>
                      <button className='bg-orange-300 dark:bg-purple-800 hover:bg-orange-500 dark:hover:bg-purple-500 p-3'>{texts.website}</button>
                    </a>
    
                    <a href={item.repo} target='_blank' title={"Open GitHub repository in new window"}>
                      <button className='bg-orange-300 dark:bg-purple-800 hover:bg-orange-500 dark:hover:bg-purple-500 p-3'>{texts.code}</button>
                    </a>
                  </li>
    
                </ul>
              </div>
          </div>
          ))
        }
        </div>
      </section>


      {/* -------------------- CONTACT FORM -------------------- */}

      <section id="contact" className='w-full flex flex-col items-center mb-10'>
        <h2 className="mb:w-full md:w-2/3 bg-orange-100 font-bold text-orange-600 text-center text-4xl p-5 dark:bg-slate-800">{texts.contact}</h2>

        <div className='flex mb:w-full md:w-2/3 mb:flex-col md:flex-row'>
          <form action="https://formsubmit.co/pablosebastianviggiano@gmail.com" method="POST"
          className='mb:w-full md:w-1/2 bg-neutral-200 dark:bg-neutral-600 flex flex-col items-center p-5 gap-4 content-center'>
            <label htmlFor="name"></label>
            <input type="text" name="name" placeholder="name" required className='w-2/3 h-10 p-2 rounded'/>

            <label htmlFor="email"></label>
            <input type="email" name="email" placeholder="email" required className='w-2/3 h-10 p-2 rounded'/>
            
            <label htmlFor="text"></label>
            <textarea name="text" placeholder="message" className='w-2/3 h-20 p-2 rounded'></textarea>
            
            <button type="submit" className='bg-orange-500 w-fit p-4' title={"Go to CAPTCHA and send"}>send</button>
          </form>

          {/* -------------------- CONTACT LINKS -------------------- */}

          <div className='mb:w-full md:w-1/2 bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-200'>
            <ul className='h-full flex flex-col justify-center'>
              <li>
                <div className='flex items-center hover:cursor-pointer' title={"click to copy"} onClick={() => {navigator.clipboard.writeText("pablosebastianviggiano@gmail.com")}}>
                  <img src={email} className='h-8 m-5' alt="" />
                  <p className='text-xs md:text-base'>pablosebastianviggiano@gmail.com</p><img src={link} alt="" className='h-5 m-2'/>
                </div>
              </li>

              <li>
                <a href="https://linkedin.com/in/pablo-viggiano" target='_blank' className='flex items-center'>
                  <img className='h-8 m-5 inline' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" />
                  <p>linkedIn</p>
                </a>
              </li>

              <li>
                <a href="https://github.com/inumakie/" target='_blank' className='flex items-center'>
                  <img className='h-8 m-5 inline' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt=""/>
                  <p>github</p>
                </a>
              </li>
            </ul>

          </div>
        </div>
        
      </section>
    </div>
  );
}

export default App;
