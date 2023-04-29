import React from 'react'
import './Dashboard.css'
import Card from './Card'
import timg from './Assets/Transaction.png'
import bell from './Assets/Bell.png'
import pfp from './Assets/pfp.png'
import revenue from './Assets/revenue.png'
import likes from './Assets/likes.png'
import users from './Assets/users.png'
import Calender from './Calender'
import Pi from './Pi'
import Lchart from './Lchart'
import setting from './Assets/setting_icon.png'
import schedule from './Assets/schedule_icon.png'
import dashboard from './Assets/dashboard_icon.png'
import user from './Assets/user_icon.png'


function Dashboard() {
  return (
    <div className='dpage'>
        <div className="nav">
            <h3>Board.</h3>

            <div className="btncontainer">
                <button className="btn3"><img src={dashboard} alt="" />   Dashboard</button>
                <button className="btn3"><img src={timg} alt="" />   Transactions</button>
                <button className="btn3"><img src={schedule} alt="" />   Schedules</button>
                <button className="btn3"><img src={user} alt="" />   Users</button>
                <button className="btn3"><img src={setting} alt="" /> Settings</button>
            </div>

            <div className="spanbox">
                <ul>
                    <li>Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            
        </div>
        <div className="heading">
            <h3>Dashboard</h3>
            <div className="searchbox">
            <input placeholder='Search' type="text" />
            <img src={bell} alt="bell" />
            <img className='profile' src={pfp} alt="profile pic" />

            </div>
            

        </div>

        <div className="topc">
            <Card
            title="Total Revenues"
            des="$2,129,430"
            url={revenue}
            color="#DDEFE0"
            />
            <Card
            title="Total Transactions"
            des="1,520"
            url={timg}
            color="#F4ECDD"
            />
            <Card
            title="Total Likes"
            des="9,720"
            url={likes}
            color="#EFDADA"
            />
            <Card
            title="Total Users"
            des="892"
            url={users}
            color="#DEE0EF"
            />
        </div>

        <div className="pichart">
            <Pi/>
        </div>

        <div className="linechart">
            <Lchart/>
        </div>

        <div className="calender">
        
        <Calender/>
        </div>


      
    </div>
  )
}

export default Dashboard
