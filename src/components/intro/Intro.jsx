import "./intro.scss"
import {Button, IconButton  } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import milo from '../../assets/attempt2.png'
import resume from '../../assets/ChenghaoLin Resume - 111021.pdf' 
import Snackbar from '@material-ui/core/Snackbar';
import React from "react";



export default function Intro() {
  const handleClickEvent = () => {
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);
  
  const handleToClose = () => {
    setOpen(false);
  };

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
                    <a href={resume} download>
                      <Button className="button" variant="outlined" onClick={handleClickEvent}>Download CV</Button>
                      <Snackbar
                        anchorOrigin={{
                          horizontal: "left",
                          vertical: "bottom",
                        }}
                        open={open}
                        autoHideDuration={3000}
                        message="CV downloaded"
                        onClose={handleToClose}
                        action={
                            <IconButton
                              size="small"
                              aria-label="close"
                              color = "inherit"
                              onClick={handleToClose}
                            >
                              <CloseIcon fontSize="small" />
                            </IconButton>
                        }
                      />
                    </a>       
                </div>
            </div>
        </div>
    )
}
