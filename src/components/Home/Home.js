import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div >
       <a href='https://twitter.com/__nimmoh__'   target="_blank" ><Button id="twitter"  >Twiter Link</Button></a>
       <a href='https://training.zuri.team/' target="_blank"><Button id="btn__zuri" >Zuri Team </Button></a>
       <a href='http://books.zuri.team ' title='Zuri Books' subtext="this is where you find books about design and coding" target="_blank"  > <Button id="books"  >Zuri Books</Button></a>
       <a href='https://books.zuri.team/python-for-beginners?ref_id=Memory-Wabwile' title='Python Books'subtext="It uses a simplified syntax with an emphasis on natural language, for a much easier learning curve for beginners" target="_blank"><Button id="book__python"  >Python Books </Button></a>
       <a href='https://background.zuri.team' title='Pitches' target="_blank" subtext="Get the app to do background checks on coders to avoid future problems" ><Button id="pitch" >Background Check for Coders </Button></a>
       <a href='https://books.zuri.team/design-rules' title='Design Books' target="_blank" subtext="get the best design books here and grow your career as a graphic designer" ><Button id="book__design"  >Design Books</Button></a>
      
      <div className='logos'>
      <a ><img id='slack' src='slackk-logo.png' alt='slack logo'/></a>
      <a href='https://github.com/Memory-Wabwile' target="_blank"><img id='github' src='githublogo.png' alt='github logo'/></a>
      
      </div>
    </div>



  )
}

export default Home