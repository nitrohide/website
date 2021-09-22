import "./intro.scss"
import {ExpandMore, LinkedIn, GitHub, Person, Mail} from '@material-ui/icons';

export default function Intro() {
    return (
        <div className = "intro" id = "intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/attempt2.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>About Me</h2>
                    <h1>Hi! My name is Chenghao Lin. I recently graduated from Rutgers University with a B.S. in Computer Science. I am currently seeking an entry level or new grad position in software engineering.</h1>
                    
                    <ul>
                        <li>
                            <a target="_blank" href="https://github.com/nitrohide" rel="noreferrer"><GitHub className="GitHubicon" /> </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/chenghaolin1/" rel="noreferrer"><LinkedIn className="LinkedInicon" /> </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => {navigator.clipboard.writeText("732-353-8656");}}
><Person className="Contacticon" /> </a>
                        </li>
                        <li>
                        <a href="#" onClick={() => {navigator.clipboard.writeText("linchenghao1999@gmail.com");}}
><Mail className="Emailicon" /> </a>
                        </li>
                    </ul>
                </div>
                <a href="#portfolio">
                        <ExpandMore className="icon" />
                </a>
            </div>
        </div>
    )
}
