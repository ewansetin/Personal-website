// import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Projects} from './pages/Projects'
import {UxPortfolio} from './pages/UxPortfolio'
import { NotFound } from './pages/NotFound'
import { Navigation } from './Navigation'
function App(){
    return(
        <Router>
            <Routes>
                <Route element={<Navigation/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="projects" element={<Projects/>} />
                <Route path="/uxportfolio" element={<UxPortfolio/>} />
                <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    )

}

export default App