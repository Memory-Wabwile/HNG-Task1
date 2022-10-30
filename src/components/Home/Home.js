import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div >
       <a href='https://twitter.com/__nimmoh__' target="_blank"><Button id="twitter"  >Twiter Link</Button></a>
      <Button id="btn__zuri" > <a href='https://training.zuri.team/' target="_blank">Zuri Team</a></Button>
      <Button id="books"  > <a href='http://books.zuri.team ' target="_blank">Zuri Books</a></Button>
      <Button id="book__python"  > <a href='https://books.zuri.team/python-for-beginners?ref_id=Memory-Wabwile' target="_blank">Python Books</a></Button>
      <Button id="pitch"  > <a href='https://background.zuri.team' target="_blank">Background Check for Coders</a></Button>
      <Button id="book__design"  > <a href='https://books.zuri.team/design-rules' target="_blank">Design Books</a></Button>
      
      <div className='logos'>
      <a href='http://books.zuri.team ' target="_blank" ><img id='slack' src='slackk-logo.png' alt='slack logo'/></a>
      <a href='http://books.zuri.team ' target="_blank"><img id='github' src='githublogo.png' alt='github logo'/></a>
      </div>
    </div>



  )
}

export default Home