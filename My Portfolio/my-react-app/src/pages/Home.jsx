import Screenscroller from '../components/ScreenScroller'
import Singlescroller from '../components/Singlescroller'
import Pannel from '../components/Pannel'
import ProjectPan from '../components/ProjectPan'

export function Home() {
  return (
      <div>
        <Screenscroller />
        <Pannel direction="row" src="../public/resources/profileicon.svg" title="About me" text="Chance Egbon is a NYC-based full-stack web developer, working in React/Redux, JavaScript, HTML5, SQL, Python, CSS, Node, Ruby/Rails, Gatsby.js and whatever other cool code he can get his hands on. Before coming to tech, he was a modern-dance critic, an animal-shelter volunteer, the artistic director of a comedy theater and, briefly, a reality televison personality. He is a proud graduate of the Flatiron School/Access Labs program and NYU's Kanbar Institute of Film/TV. He has not met your dog yet, but is sure that he will love them."/>
        <Pannel textAlign ="right" textwidth="400px"imagewidth="400px" direction="row-reverse" src="../public/resources/codinglanguageslogos.svg" title="Software Development" text="Chance Egbon is a NYC-based full-stack web developer, working in React/Redux, JavaScript, HTML5, SQL, Python, CSS, Node, Ruby/Rails, Gatsby.js and whatever other cool code he can get his hands on. Before coming to tech, he was a modern-dance critic, an animal-shelter volunteer, the artistic director of a comedy theater and, briefly, a reality televison personality. "/>
        <Singlescroller value14= 'Projects'  color14= '#EFEBDB'opacity='0.9'/>
        <ProjectPan title="Driving Hub" paragraph1="Chance Egbon is a NYC-based full-stack web developer, working in React/Redux, JavaScript, HTML5, SQL, Python," paragraph2="CSS, Node, Ruby/Rails, Gatsby.js and whatever other cool code he can get his hands on."/>
        <ProjectPan title="Driving Hub" paragraph1="Chance Egbon is a NYC-based full-stack web developer, working in React/Redux, JavaScript, HTML5, SQL, Python," paragraph2="CSS, Node, Ruby/Rails, Gatsby.js and whatever other cool code he can get his hands on."/>
      </div>
  )
}