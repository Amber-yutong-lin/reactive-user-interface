import React, { Component } from 'react';
import Article from "./article";
import './article.css';

class App extends Component {
  render() {
    const myList = [
      { date: 'FEB. 3, 2018',
        tit : "Witnesses Shed New Light on Natalie Wood’s ‘Suspicious Death",
        summery : "New witness statements have re-energized the investigation into the drowning of Natalie Wood, the child star turned Hollywood icon who disappeared off a yacht over Thanksgiving weekend in 1981.",
        author : 'By MAYA SALAM',
        link : 'https://static01.nyt.com/images/2018/02/02/us/02xp-Drown-1-wood/02xp-Drown-1-wood-master768.jpg',
    },

    {date: 'FEB. 3, 2018',
      tit : "This Work Helps the Living",
      summery : "Luis Lora, 49, is a master tissue technician at MTF Biologics in Edison, N.J., where he processes human tissue that can be used to treat sick or injured patients.",
      author : 'By PATRICIA R. OLSEN',
      link : 'https://static01.nyt.com/images/2018/02/04/business/04VOCATIONS1/merlin_132284177_dd1b7a00-0131-4875-8f78-49eafd5e69fc-master768.jpg',
  },
  {date: 'FEB. 3, 2018',
    tit: "Jon Huntsman Sr., Billionaire Businessman and Philanthropist, Dies at 80",
    summery : "Jon Huntsman Sr., who rose to become a billionaire industrialist died on Friday at his home in Salt Lake City. He was 80.",
    author : 'By CADE METZ',
    link : 'https://static01.nyt.com/images/2018/02/04/us/04Huntsman-sr-obit/03Huntsman-sr-obit-master768.jpg',
  },
    ]

const newList = myList.map(news, p)=> {
  return <p key = {P}>{news}</p>
}
    return(
    <div className = 'App>'
      <p>{newList}</p>
      <div>






</div>
    )
  }
};

export default App;
