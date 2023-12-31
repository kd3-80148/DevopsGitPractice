import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Link,Route,Switch} from 'react-router-dom'

function Launcher(){
   return( <div className="container">
    <hr/>
    <Link to = "/home"> Home </Link> {"|"}
    <Link to = "/about"> About us </Link> {"|"}
    <Link to = "/db"> Dashboard </Link>
    <hr/>


    <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path ="/home" component={Home}/>
        <Route exact path ="/about" component = {About}/>
        <Route exact path ="/db" component = {Dashboard}/>


        
    </Switch>


   </div>
   )

}

export default Launcher;