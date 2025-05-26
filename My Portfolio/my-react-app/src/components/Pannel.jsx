import './Pannel.css'
function Pannel(prop) {
  return (
    <div class='section'> 
  <div class='Pannel' style={{flexDirection:(prop.direction)}}> 
    <div class='text' style={{width:(prop.textwidth), textAlign:(prop.textAlign)}}>
    <h1>{prop.title}</h1>
    <p>{prop.text}</p>
    </div>
    <div class='image' >
    <img src={prop.src} alt='' style={{width:(prop.imagewidth)}} />
    </div>
  </div>
  </div>
  )
}

export default Pannel