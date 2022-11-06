import React from "react";
import { Button } from "react-bootstrap";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  return (
    
    <div>
          <Header />
    
    
      <div className="links">


        <a href="https://twitter.com/__nimmoh__" target="_blank" id="twitter">
          Twiter Link
        <span className="tooltipSubtext" >__nimmoh__</span>
        </a>

        <a href="https://training.zuri.team/" id="btn__zuri" target="_blank">
          Zuri Team{" "}
        </a>


        <a
          href="http://books.zuri.team "
          title="Zuri Books"
          id="books"
          target="_blank"
          
        >
          <span className="tooltipSubtext" >this is where you find books about design and coding</span>
          {" "}
          Zuri Book
        </a>


        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=Memory-Wabwile"
          id="book__python"
          title="Python Books"
          target="_blank"
        >
          <span className="tooltipSubtext" >It uses a simplified syntax with an emphasis on natural language, for a much easier learning curve for beginners</span>
          Python Books{" "}
        </a>


        <a
          href="https://background.zuri.team"
          title="Pitches"
          target="_blank"
           >
          <span className="tooltipSubtext" >Get the app to do background checks on coders to avoid future problems</span>
          Background Check for Coders
        </a>


        <a
          href="https://books.zuri.team/design-rules"
          title="Design Books"
          id="book__design"
          target="_blank"
          
        >
          <span className="tooltipSubtext" >get the best design books here and grow your career as a graphic designer</span>
          Design Books
        </a>

        <Link to="/contact"

          >Contact Me</Link>

        
      </div>



      <div className="logos">
        <img id="slack" src="slackk-logo.png" alt="slack logo" />
        <a href="https://github.com/Memory-Wabwile" target="_blank">
          <img id="github" src="githublogo.png" alt="github logo" />
        </a>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
