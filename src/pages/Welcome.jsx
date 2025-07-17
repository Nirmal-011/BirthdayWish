import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
  const navigate = useNavigate()

  return (
    <div className="welcome-container">
      <div className="floating-hearts">
        <div className="heart heart-1">💚</div>
        <div className="heart heart-2">💖</div>
        <div className="heart heart-3">💚</div>
        <div className="heart heart-4">💕</div>
        <div className="heart heart-5">💚</div>
        <div className="heart heart-6">💖</div>
      </div>
      
      <div className="love-pattern-bg"></div>
      
      <div className="content-wrapper">
        <div className="main-content">
          <h1 className="birthday-title">
            <span className="title-line">Happy Birthday,</span>
            <span className="title-line love-text">My Love</span>
            <span className="celebration-emoji">🎉</span>
          </h1>
          
          <p className="subtitle">
            Here's a small surprise I made just for you 
            <span className="love-emoji">💖</span>
          </p>
          
          <div className="button-wrapper">
            <button 
              className="journey-button"
              onClick={() => navigate('/message')}
            >
              <span className="button-text">Start the Journey</span>
              <span className="button-emoji">💌</span>
            </button>
          </div>
        </div>
        
        <div className="decorative-elements">
          <div className="love-circle circle-1"></div>
          <div className="love-circle circle-2"></div>
          <div className="love-circle circle-3"></div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
