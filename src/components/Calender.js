import React from 'react'
import './Calender.css'

const info =[
    {
    title:"Meeting with suppliers from kuta Bali",
    time:"14:00-15:00",
    venue:"at Sunset Road,Kuta Bali",
    color:"Green"

    },
    {
    title:"Check operation at Giga Factory 1",
    time:"18:00-20:00",
    venue:"at Central Jakrata",
    color:"blue"

    },
]

function Calender() {
  return (
    <div className="cbox">
        <div className="hd">
        <h3>Today's schedule</h3>
        <span>See All</span>
        </div>

        <div className="info">
            <div style={{backgroundColor:"#9BDD7C"}} className="bar"></div>
            <div className="cnt">
            <h5>{info[0].title}</h5>
            <span>{info[0].time}</span>
            <span>{info[0].venue}</span>
            </div>
            
        </div>

        <div className="info">
        <div style={{backgroundColor:"#6972C3"}} className="bar"></div>
            <div className="cnt">
            <h5>{info[1].title}</h5>
            <span>{info[1].time}</span>
            <span>{info[1].venue}</span>
        </div>

        </div>

        

    </div>
    
    
    

    


    
    
    
    
  )
}

export default Calender
