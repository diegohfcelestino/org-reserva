import React, { useState } from 'react';
import "./style.scss";


export default function Tabs({ contents, title }) {
  const [activeTab, setActiveTab] = useState(0)

  const changeTab = (tab) => {
    setActiveTab(tab)
  };

  const Tab = () => {
    return (
      <div className="tab-content">
        <span>{contents[activeTab]?.component}</span>
      </div>
    )
  }

  const TabButtons = () => {
    return (
      <div className="tab-buttons" >
        {contents.map((button, index) => {
          return (
            <button key={index} className={activeTab === index ? 'active_tab' : ''}
              onClick={() => changeTab(index)}>{button.label}</button>
          )
        })}
      </div >
    )
  }

  return (
    <div className="tabs">
      <h2>{title}</h2>
      <TabButtons />
      <Tab />
    </div>

  )
}