import Singlescroller from '../components/Singlescroller'
import Pannel from '../components/Pannel'
import values from '../assets/values'

function createValues(prop){
    return(
    <Pannel 
    key = {prop.id}
    direction={prop.direction}
    src={prop.src}
    title={prop.title}
    text={prop.text}
    textAlign={prop.textAlign}
    textwidth={prop.textwidth}
    imagewidth={prop.imagewidth}
    />
    );
  }
  
export function About() {
  
  return (
      <div>
        <Pannel direction="row" src="../public/resources/profile.png" title="About me" text="Chance Egbon is a NYC-based full-stack web developer, working in React/Redux, JavaScript, HTML5, SQL, Python, CSS, Node, Ruby/Rails, Gatsby.js and whatever other cool code he can get his hands on. Before coming to tech, he was a modern-dance critic, an animal-shelter volunteer, the artistic director of a comedy theater and, briefly, a reality televison personality. He is a proud graduate of the Flatiron School/Access Labs program and NYU's Kanbar Institute of Film/TV. He has not met your dog yet, but is sure that he will love them."/>
        <Pannel textAlign ="right" direction="row-reverse" src="../public/resources/Tower.svg" title="" text="Chance Egbon is a NYC-based full-stack web developer, working in React/Redux, JavaScript, HTML5, SQL, Python, CSS, Node, Ruby/Rails, Gatsby.js and whatever other cool code he can get his hands on. Before coming to tech, he was a modern-dance critic, an animal-shelter volunteer, the artistic director of a comedy theater and, briefly, a reality televison personality. He is a proud graduate of the Flatiron School/Access Labs program and NYU's Kanbar Institute of Film/TV. He has not met your dog yet, but is sure that he will love them."/>
        <Pannel direction="row" src="../public/resources/Screenpaint.svg" title="" text="Chance Egbon is a NYC-based full-stack web developer, working in React/Redux, JavaScript, HTML5, SQL, Python, CSS, Node, Ruby/Rails, Gatsby.js and whatever other cool code he can get his hands on. Before coming to tech, he was a modern-dance critic, an animal-shelter volunteer, the artistic director of a comedy theater and, briefly, a reality televison personality. He is a proud graduate of the Flatiron School/Access Labs program and NYU's Kanbar Institute of Film/TV. He has not met your dog yet, but is sure that he will love them."/>
        <Pannel textAlign ="right" direction="row-reverse" src="../public/resources/Bowlingimg.svg" title="" text="Chance Egbon is a NYC-based full-stack web developer, working in React/Redux, JavaScript, HTML5, SQL, Python, CSS, Node, Ruby/Rails, Gatsby.js and whatever other cool code he can get his hands on. Before coming to tech, he was a modern-dance critic, an animal-shelter volunteer, the artistic director of a comedy theater and, briefly, a reality televison personality. He is a proud graduate of the Flatiron School/Access Labs program and NYU's Kanbar Institute of Film/TV. He has not met your dog yet, but is sure that he will love them."/>
        <Singlescroller value14= 'My values'  color14= '#EFEBDB'opacity='0.9'/>
        <Pannel text="Chance Egbon is a NYC-based "/>
        <dl>{values.map(createValues)}</dl>
      </div>
  )
}