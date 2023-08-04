import { useState } from "react";
import menuIcon from '../assets/menu.png'
import exitIcon from '../assets/exitIcon.png'
import mailIcon from '../assets/mail.png'
import inboxIcon from '../assets/inbox.jpg'
import sentIcon from '../assets/outbox.png'
import trashIcon from '../assets/trash.png'
import SocialIcon from '../assets/folder.png'
import Notification from '../assets/notification bell.png'
import chats from '../assets/message.jpg'
import Trash from '../assets/trash.png'





const Dashboard = () => {
  const [showSubIcons, setShowSubIcons]= useState(false)

  const toggleSubIcons = () => {
    setShowSubIcons(!showSubIcons);
  }
  
    return (
      <div className="font-oleo">

        <div className="flex">
          <div className="md:hidden fixed top-0 left-0 h-screen w-24 bg-white p-4 text-black overflow-hidden">
            <div className="md:hidden flex flex-col items-center">
              <button onClick={toggleSubIcons}>
                {!showSubIcons?<img src={menuIcon} alt="menuIcon" className="h-6 w-6" />:<img src={exitIcon} alt="exitIcon" className="h-6 w-6" />}   
            </button>
              {!showSubIcons?<div />: 
                <div className="flex flex-col mt-4 ">
                  <button className="flex items-center pb-6">
                    <img src={mailIcon} alt="mailIcon" className="h-5 w-5" /><br />
                    <span className="text-sm ml-2">Mailbox</span>
                  </button>
                  <button className="flex items-center pb-6">
                    <img src={inboxIcon} alt="inboxIcon" className="h-5 w-5" /><br />
                    <span className="text-sm ml-2">Mailbox</span>
                  </button>
                  <button className="flex items-center pb-6">
                    <img src={sentIcon} alt="sentIcon" className="h-5 w-5" /><br />
                    <span className="text-sm ml-2">Mailbox</span>
                  </button>
                  <button className="flex items-center pb-6">
                    <img src={trashIcon} alt="trashIcon" className="h-5 w-5" /><br />
                    <span className="text-sm ml-2">Mailbox</span>
                  </button>
                  <button className="flex items-center pb-6">
                    <img src={SocialIcon} alt="SocialIcon" className="h-5 w-5" /><br />
                    <span className="text-sm ml-2">Mailbox</span>
                  </button>

                </div>
              
              }
            </div>
          </div>
          <div className="fixed top-0 left-0 h-screen w-24 bg-white p-4 text-black overflow-hidden">
            <div className="flex flex-col items-center">
              <button onClick={toggleSubIcons}>
                {!showSubIcons?<img src={menuIcon} alt="menuIcon" className="h-6 w-6" />:<img src={exitIcon} alt="exitIcon" className="h-6 w-6" />}   
            </button>
              {!showSubIcons?<div />: 
                <div className="flex flex-col mt-4 ">
                  <button className="flex flex-col items-center pb-4">
                    <img src={mailIcon} alt="mailIcon" className="h-5 w-5" /><p />
                    <span className="text-sm ml-2">Mail</span>
                  </button>
                  <button className="flex flex-col items-center pb-4">
                    <img src={inboxIcon} alt="inboxIcon" className="h-5 w-5" /><br />
                    <span className="text-sm ml-2">Inbox</span>
                  </button>
                  <button className="flex flex-col items-center pb-4">
                    <img src={sentIcon} alt="sentIcon" className="h-5 w-5" /><br />
                    <span className="text-sm ml-2">Sent box</span>
                  </button>
                  <button className="flex flex-col items-center pb-4">
                    <img src={trashIcon} alt="trashIcon" className="h-5 w-5" /><br />
                    <span className="text-sm ml-2">Trash</span>
                  </button>
                  <button className="flex flex-col items-center pb-4">
                    <img src={SocialIcon} alt="SocialIcon" className="h-5 w-5" /><br />
                    <span className="text-sm ml-2">SocialMedia</span>
                  </button>

                </div>
              
              }
            </div>
          </div>
        </div>
    
    <div className="flex justify-between h-12 ps-28 items-center bg-white shadow-2xl">
      <div>
        <input type="text " placeholder="Search" className="pl-2 border-y-white border-x-4 border-gray-200 outline-none w-28 h-12 text-gray-500. items-center font-play"/>  
      </div>
      <div className="flex items-center">
        <img src={Notification} alt="Notification" className=" w-10 h-10" />
        <img src={chats} alt="chats" className="w-14 h-12" />
      </div>

    </div>
    <h1 className="text-3xl font-semi-bold font-Nunito pl-24 pb-12">Dashboard</h1>
    <div className=" px-12">
      <div className="md:flex justify-center gap-10 pb-10">
        <div className="bg-green-400 shadow-2xl w-1/2 h-48 text-5xl text-center font-semibold font-play text-white">Sent Mail <p className="pt-16">0</p></div>
        <div className="bg-red-600 shadow-2xl w-1/2 h-48 text-center font-semibold font-play text-white text-5xl">Outbox <p className="pt-16">0</p></div>
        
      </div>
      <div className="md:flex justify-center gap-10 ">
        <div className="bg-blue-400 shadow-2xl w-1/2 h-48 font-semibold font-play text-white text-5xl text-center">Inbox <p className="pt-16">0</p></div>
        <div className="bg-white shadow-2xl w-1/2 h-48 font-semibold font-play text-black text-5xl text-center">Trash <p><img src={Trash}alt="Trash" className="ps-60 " /> </p></div>
        
      </div>
      
    </div>
    
      </div>
    )
  }
  export default Dashboard;
