import React, { useState } from 'react';
import { useCursos } from '../../context/cadastros/CursosContext';
import "./style.scss";


export default function Tabs({ contents, title }) {
  const [activeTab, setActiveTab] = useState(0)
  const { videoAmount, setVideoAmount } = useCursos()

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
            <button key={index} className={`position-relative ${videoAmount && 'mt-1'} ${activeTab === index ? 'active_tab' : ''}`}
              onClick={() => {
                setVideoAmount(null)
                changeTab(index)
              }}
            >
              {button.label}
              {activeTab === index && (
                videoAmount && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{videoAmount} <span className="visually-hidden">unread messages</span></span>
                )
              )}
            </button>
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