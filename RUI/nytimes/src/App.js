import React, { Component } from 'react';
import './App.css';

const NewsList = [
  {
date : 'FEB. 3, 2018',
title : "Witnesses Shed New Light on Natalie Wood’s ‘Suspicious Death",
abstract : "New witness statements have re-energized the investigation into the drowning of Natalie Wood, the child star turned Hollywood icon who disappeared off a yacht over Thanksgiving weekend in 1981.",
author : 'MAYA SALAM',
pic : 'https://static01.nyt.com/images/2018/02/02/us/02xp-Drown-1-wood/02xp-Drown-1-wood-master768.jpg',
},
{
date : 'FEB. 3, 2018',
title : 'This Work Helps the Living',
abstract : "Luis Lora, 49, is a master tissue technician at MTF Biologics in Edison, N.J., where he processes human tissue that can be used to treat sick or injured patients.",
author : 'PATRICIA R. OLSEN',
pic : 'https://static01.nyt.com/images/2018/02/04/business/04VOCATIONS1/merlin_132284177_dd1b7a00-0131-4875-8f78-49eafd5e69fc-master768.jpg',
},
{
date : 'FEB. 3, 2018',
title : "Jon Huntsman Sr., Billionaire Businessman and Philanthropist, Dies at 80",
abstract : "Jon Huntsman Sr., who rose to become a billionaire industrialist died on Friday at his home in Salt Lake City. He was 80.",
author : 'CADE METZ',
pic : 'https://static01.nyt.com/images/2018/02/04/us/04Huntsman-sr-obit/03Huntsman-sr-obit-master768.jpg',
},
];

class App extends Component {
  render() {
   const first  = NewsList[0]
   const second  = NewsList[1]
   const third  = NewsList[2]

    return (
      <div className="App">
        <div className='item'> <h4 className="leftSideDate">{first.date}</h4>
      <p className="text"><h2>{first.title}</h2>
                  <p>{first.abstract}</p>
                  <h4 className = 'author'>By {first.author}</h4></p>
      <p className="rightSidePic"><img src={first.pic} alt="opps" className="imageItself"/></p></div>

          <div className='item'> <h4 className="leftSideDate">{second.date}</h4>
        <p className="text"><h2>{second.title}</h2>
                    <p>{second.abstract}</p>
                    <h4 className = 'author'>By {second.author}</h4></p>
        <p className="rightSidePic"><img src={second.pic} alt="opps" className="imageItself"/></p></div>


        <div className='item'> <h4 className="leftSideDate">{third.date}</h4>
        <p className="text"><h2>{third.title}</h2>
                    <p>{third.abstract}</p>
                    <h4 className = 'author'>By {third.author}</h4></p>
        <p className="rightSidePic"><img src={third.pic} alt="opps" className="imageItself"/></p></div>

      </div>
    );
  }
}

export default App;
