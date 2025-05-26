import './ProjectPan.css'
function ProjectPan(prop) {
  return (
    <div class='padding' style={{padding:'0px 0px 70px 0px'}}>

  <div class='projectpan'>

    <div class='pimage' ></div>

    <div class='imagdescription'>
    <h2 style={{margin: '0px 0px 20px 0px'}}>{prop.title}</h2>
    <p style={{padding:'0px 0px 20px 0px'}}>{prop.paragraph1}</p>
    <p style={{padding:'0px 0px 10px 0px'}}>{prop.paragraph2}</p>
    <button>VIEW</button>
    </div>

  </div>

  </div>

  )
}

export default ProjectPan