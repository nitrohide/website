import "./intro.scss"
import {Button} from '@material-ui/core';
import milo from './attempt2.png'

export default function Intro() {
    return (
        <div className = "intro" id = "intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={milo} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>About Me</h2>
                    <h1>Hi! My name is Chenghao Lin. I recently graduated from Rutgers University with a B.S. in Computer Science. I am currently seeking an entry level or new grad position in software engineering.</h1>     
                    <Button className="button" variant="outlined">Download CV</Button>        
                </div>
            </div>
        </div>
    )
}
