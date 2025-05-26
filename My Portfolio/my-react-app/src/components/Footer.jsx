import { Link } from 'react-router-dom';
import './Footer.css'
function Footer() {

    const date = new Date();
    const curretYear = date.getFullYear()

  return (
      <div class="Footer">
        <div class="div0">
          <Link class = "Link" to="/">PROJECTS</Link>
          <Link class = "Link" to="/about">ABOUT ME</Link>
          <Link class = "Link" to="/">RESUME</Link>
          <Link class = "Link" to="/">UX PORTFOLIO</Link>
        </div>
        <div class="div1">
          <hr></hr>
        </div>
        <div class="div2">
          <span>@ {curretYear} Chance Egbon</span>
          <img class="img1" src='../public/resources/linkedin.svg' alt=''/>
          <img class="img2" src='../public/resources/gitlogo.svg' alt=''/>
          <img class="img0" src='../public/resources/mylogob&w.svg' alt=''/>
        </div>
      </div>
  )
}

export default Footer