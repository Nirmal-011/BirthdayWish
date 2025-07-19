import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SurpriseEnding.css'
import video from "../assets/videos/Birthday.mp4"

const SurpriseEnding = () => {
  const navigate = useNavigate()

  return (
    <div className="surprise-ending-container">
      {/* Floating Hearts Background */}
      <div className="surprise-ending-floating-hearts">
        <div className="surprise-ending-heart surprise-ending-heart-1">💚</div>
        <div className="surprise-ending-heart surprise-ending-heart-2">🌿</div>
        <div className="surprise-ending-heart surprise-ending-heart-3">💚</div>
        <div className="surprise-ending-heart surprise-ending-heart-4">🌱</div>
        <div className="surprise-ending-heart surprise-ending-heart-5">💚</div>
        <div className="surprise-ending-heart surprise-ending-heart-6">🌿</div>
        <div className="surprise-ending-heart surprise-ending-heart-7">💚</div>
        <div className="surprise-ending-heart surprise-ending-heart-8">🌱</div>
      </div>

      {/* Love Pattern Overlay */}
      <div className="surprise-ending-love-pattern-overlay"></div>

      <div className="surprise-ending-content-wrapper">
        <h1 className="surprise-ending-main-title">
          <span className="surprise-ending-title-text">The Final Surprise</span>
          <span className="surprise-ending-title-heart">💖</span>
        </h1>

        <div className="surprise-ending-card surprise-ending-video-card">
          <div className="surprise-ending-card-header">
            <h2 className="surprise-ending-card-title">🎥 A Special Video</h2>
            <div className="surprise-ending-love-border"></div>
          </div>
          <div className="surprise-ending-video-wrapper">
            <video controls className="surprise-ending-video-player">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="surprise-ending-card surprise-ending-promise-card">
          <div className="surprise-ending-card-header">
            <h2 className="surprise-ending-card-title">💌 A Promise for You</h2>
            <div className="surprise-ending-love-border"></div>
          </div>
          <div className="surprise-ending-promise-content">
            <p className="surprise-ending-promise-text">
              "No matter where life takes us, I'll always be by your side — to hold your hand, to make you laugh, and to love you unconditionally. Forever and always."
            </p>
            <div className="surprise-ending-promise-decoration">
              <span className="surprise-ending-decoration-heart">💚</span>
              <span className="surprise-ending-decoration-infinity">∞</span>
              <span className="surprise-ending-decoration-heart">💚</span>
            </div>
          </div>
        </div>

        <div className="surprise-ending-card surprise-ending-gift-card">
          <div className="surprise-ending-card-header">
            <h2 className="surprise-ending-card-title">🎁 Your Final Gift</h2>
            <div className="surprise-ending-love-border"></div>
          </div>
          <div className="surprise-ending-gift-content">
            <button
              onClick={() => navigate('/secret')}
              className="surprise-ending-gift-button"
            >
              <span className="surprise-ending-button-text">Reveal the Gift</span>
              <span className="surprise-ending-button-icon">💝</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurpriseEnding