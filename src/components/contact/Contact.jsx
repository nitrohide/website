import "./contact.scss";
import React from "react";
import { Button } from "@material-ui/core";
import MaterialTooltip from "@material-ui/core/Tooltip";
import { Room, LinkedIn, GitHub, Person, Mail } from "@material-ui/icons";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="top">
        <h1>Contact Me</h1>
      </div>
      <div className="middle">
        <div className="left">
          <div className="contact-info">
            <Room className="Locationicon" />
            East Brunswick, NJ
          </div>
          <div className="contact-info">
            <Person className="Contacticon" />
            (732)-353-8656
          </div>
          <div className="contact-info">
            <Mail className="Emailicon" />
            Linchenghao1999@gmail.com
          </div>
          <hr />
          
        </div>
        <div>
            <a target="_blank" href="https://github.com/nitrohide" rel="noreferrer"><GitHub className="GitHubicon" /> </a>
            <a target="_blank" href="https://www.linkedin.com/in/chenghaolin1/" rel="noreferrer"><LinkedIn className="LinkedInicon" /> </a>
          </div>
        <div className="right">
          <form action="https://submit-form.com/8I2SxRem">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <Button className="button" type="submit">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
