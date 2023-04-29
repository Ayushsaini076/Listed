import React from 'react'
import './Pi.css'
import pie from './Assets/Pie Chart.png'

function Pi() {
  return (
    <div className='pibox'>
        <div className="phd">
        <h4>Top Products</h4>
        <span>May-June 2021</span>
        </div>
        <div className="pc">
        <img src={pie} alt="" />
        <div className="infobox">
            {/* <div className="dotbox">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div> */}

        <div className="pinfo">
            <div style={{border:"0.3em solid #98D89E"}} className="dot"></div>
            <div className="pcontent">
            <h6>  Basic Trees</h6>
            <span>55%</span>
            </div>
        </div>
        <div className="pinfo">
            <div style={{border:"0.3em solid #F6DC7D"}} className="dot"></div>
            <div className="pcontent">
            <h6>  custom short pants</h6>
            <span>31%</span>
            </div>
        </div>
        <div className="pinfo">
            <div style={{border:"0.3em solid #EE8484"}} className="dot"></div>
            <div className="pcontent">
            <h6>  Super Hoodies</h6>
            <span>14%</span>
            </div>
        </div>
        

        </div>
        

        </div>
        
      
    </div>
  )
}

export default Pi
