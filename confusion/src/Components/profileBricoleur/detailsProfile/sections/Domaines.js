import React from 'react'

function Domaines({datas}) {    
    return (
      <div className="cursus">
        <h3 id="h3">Domaines professionels</h3>
        {datas.map(item => (
          <div className="grid__row" key={item.id}>
            <div className="grid__item">
              <h4 className="grid__mission">{item.title}</h4>
            </div>
            <div className="grid__item">
              <p id="p" className="grid__location">{item.location}</p>
              <p id="p" className="grid__text">{item.text}</p>
              <ul className="grid__missions">
                {item.missions.map(mission => (
                  <li id="li" className="grid__mission" key={mission.id}>
                  {mission.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    )
}


export default Domaines