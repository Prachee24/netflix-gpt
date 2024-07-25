import Login from "./Login";
import Browse from "./Browse";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const Body =()=>{

    return(

    <Router>

        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/browse' element={<Browse/>}/>
        </Routes>
    </Router>

    )

   
}

export default Body;