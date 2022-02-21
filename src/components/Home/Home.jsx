import React from 'react';
import { useHistory } from 'react-router-dom';


function Home() {
  const history = useHistory();

  const handleClick = () => {
    alert('you clicked me');
    // change location
    history.push('/animals');
    console.log('history is', history)
  }

  return (
    <div>
      <button onClick={handleClick}>Let's goooo</button>
      <h1>HOME</h1>
      <img src="https://pixy.org/download/4718707/" width={500}/>
    </div>
  );
}

export default Home;
