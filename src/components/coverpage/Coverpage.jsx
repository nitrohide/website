import "./coverpage.scss"
import {ExpandMore, LinkedIn, GitHub, Person, Mail} from '@material-ui/icons';
import MaterialTooltip from '@material-ui/core/Tooltip';
import { Parallax } from 'react-scroll-parallax'

export default function Coverpage() {
    return (
        <div className = "coverpage" id="coverpage">
            <div className = "wrapper">
                <h1>Welcome to my Website</h1>
                <h2>I'm Chenghao</h2>
            </div>

            <ul>
                <li>
                    <a target="_blank" href="https://github.com/nitrohide" rel="noreferrer"><GitHub className="GitHubicon" /> </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/chenghaolin1/" rel="noreferrer"><LinkedIn className="LinkedInicon" /> </a>
                </li>
                <li>
                    <MaterialTooltip
                        arrow
                        PopperProps={{
                            modifiers: {
                                offset: {
                                enabled: true,
                                offset: '0px, -2px',
                                },
                            },
                            }
                        }
                        title="Copy Phone # to Clipboard" >
                        <a id="personicon" href="#" onClick={() => {navigator.clipboard.writeText("(732)-353-8656")}}><Person className="Contacticon" /> </a>
                    </MaterialTooltip>
                </li>
                <li>
                    <MaterialTooltip
                    arrow
                    PopperProps={{
                        modifiers: {
                        offset: {
                            enabled: true,
                            offset: '0px, -2px',
                        },
                        },
                    }
                }
                    title="Copy Email to Clipboard" >
                        <a href="#" onClick={() => {navigator.clipboard.writeText("linchenghao1999@gmail.com")}}><Mail className="Emailicon" /> </a>
                    </MaterialTooltip>
                </li>
            </ul>
            <a href="#intro" className="arrow">
                        <ExpandMore className="icon" />
            </a>
        </div>
    )
}
