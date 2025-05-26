import { Link } from 'react-router-dom';
import mylogo from '../../public/resources/mylogob&w.svg'
import mylinkedinlogo from '../../public/resources/linkedin.svg'
import githublogo from '../../public/resources/gitlogo.svg'
import './Header.css'
function Header(prop) {
  return (
      <div class ="header" style={{background:(prop.background)}}>
       
        <div class="div_0">
          <div>
          <Link class = "Link" to="/"><img src={mylogo} alt=''/></Link>
          </div>
          <div>
          <a href="https://www.linkedin.com/in/chance-egbon" target="_blank" rel="noopener noreferrer"><img src={mylinkedinlogo} alt='My Logo - Click to visit LinkedIn'/></a>
          </div>
           <a href="https://www.linkedin.com/in/chance-egbon" target="_blank" rel="noopener noreferrer"><img src={githublogo} alt=''/></a>
          <div>
            <a href="" target="" rel="">Resume</a>
            </div>
        </div>

        <div class="div_1">
             <Link class = "Link" to="/">Projects</Link>
             <img src='../public/resources/dots.svg' alt=''/>
            <Link class = "Link" to="/">Ux portfolio</Link> 
        </div>

        <div class="div_2">
          <Link class = "Link" to="/about">About me</Link>
             {/* <img src='../public/resources/dotsb.svg' alt=''/> */}
             <span>|</span>
            
            <a href="" target="" rel="" >Get in touch</a>
            <img src='../public/resources/arrow.svg' alt=''/>
        </div>
        
      </div>
  )
}

export default Header