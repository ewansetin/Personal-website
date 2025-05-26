import Header from "../components/Header";
import './Singlescroller.css'
import randomwords from '../assets/randomwords'
import Singlescroller from './Singlescroller';

function createScroller(prop){
    return(
    <Singlescroller 
    
    key = {prop.id}
    {...prop}
    // value1= {prop.value1}
    // value2= {prop.value2}
    // value3= {prop.value3}
    // value4= {prop.value4}
    // value5= {prop.value5}
    // value6= {prop.value6}
    // value7= {prop.value7}
    // value8= {prop.value8}
    // value9= {prop.value9}
    // value10= {prop.value10}
    // value11= {prop.value11}
    // value12= {prop.value12}
    // value13= {prop.value13}
    // value14= {prop.value14}
    // value15= {prop.value15}
    // value16= {prop.value16}
    // value17= {prop.value17}
    // value18= {prop.value18}
    // value19= {prop.value19}
    // value20= {prop.value20}
    // value21= {prop.value21}
    // value22= {prop.value22}
    // value23= {prop.value23}
    // value24= {prop.value24}
    // value25= {prop.value25}
    // value26= {prop.value26}
    // value27= {prop.value27}

    // color1 = {prop.color1}
    // color2 = {prop.color2}
    // color3 = {prop.color3}
    // color4 = {prop.color4}
    // color5 = {prop.color5}
    // color6 = {prop.color6}
    // color7 = {prop.color7}
    // color8 = {prop.color8}
    // color9 = {prop.color9}
    // color10 = {prop.color10}
    // color11 = {prop.color11}
    // color12 = {prop.color12}
    // color13 = {prop.color13}
    // color14 = {prop.color14}
    // color15 = {prop.color15}
    // color16 = {prop.color16}
    // color17 = {prop.color17}
    // color18 = {prop.color18}
    // color19 = {prop.color19}
    // color20 = {prop.color20}
    // color21 = {prop.color21}
    // color22 = {prop.color22}
    // color23 = {prop.color23}
    // color24 = {prop.color24}
    // color25 = {prop.color25}
    // color26 = {prop.color26}
    // color27 = {prop.color27}

    />
    );
  }

function Screenscroller() {
  return (
    <>
    <div style={{position:'static'}} >
      <div className='app-header'>
    <Header  background='transparent'/>
    </div>
    <div class='scrolldiv'>
      <div className='scrollmap'>
      
        {randomwords.map(createScroller)}
        </div>
        
        <div class='scrolltext' >
          <div class='nametitle' >
        <span >Chance Egbon</span>
        </div>
        <div class='introdiv'>
        <span  class='nametitleintro'>Innovation-driven Software Engineer with a passion for crafting elegant, user-centric digital solutions. Blends technical expertise with creative problem-solving to build impactful experiences.</span>
        
        </div>
    </div>

  </div>
  
  </div>

  </>
  )
}

export default Screenscroller;