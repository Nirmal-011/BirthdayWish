import React from 'react'
import './MemoryGallery.css'
import Image1 from "../assets/Images/Image1.png"
import Image2 from "../assets/Images/Image2.png"
import Image3 from "../assets/Images/Image3.jpg"
import Image4 from "../assets/Images/Image4.jpg"
import Image5 from "../assets/Images/Image5.jpg"
import Image6 from "../assets/Images/Image6.jpg"
import Image7 from "../assets/Images/Image7.jpg"
import Image8 from "../assets/Images/Image8.jpg"
import Image9 from "../assets/Images/Image9.jpg"
import Image10 from "../assets/Images/Image10.jpg"
import Image11 from "../assets/Images/Image11.jpg"
import Image12 from "../assets/Images/Image12.png"
import Image13 from "../assets/Images/Image13.png"
import Image14 from "../assets/Images/Image14.png"
import Image15 from "../assets/Images/Image15.jpg"
import Image16 from "../assets/Images/Image16.png"

const memoryImages = [
  Image1, Image2,
  Image3, Image4,
  Image5, Image6,
  Image7, Image8,
  Image9, Image10,
  Image11, Image12,
  Image13, Image14,
  Image15, Image16
]

const MemoryGallery = () => {
  return (
    <div className="memory-gallery-container">
      {/* Floating Hearts Background */}
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`heart heart-${i + 1}`}>♥</div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="decorative-elements">
        <div className="vine-pattern vine-left"></div>
        <div className="vine-pattern vine-right"></div>
        <div className="love-birds">
          <div className="bird bird-1">🕊️</div>
          <div className="bird bird-2">🕊️</div>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="title-section">
          <h1 className="main-title">
            <span className="title-decoration">🌿</span>
            Our Garden of Love
            <span className="title-decoration">🌿</span>
          </h1>
          <p className="subtitle">Where every moment blooms eternal 💚</p>
        </div>

        <div className="gallery-grid">
          {memoryImages.map((src, index) => (
            <div key={index} className="memory-card">
              <div className="card-inner">
                <div className="image-frame">
                  <img
                    src={src}
                    alt={`Memory ${index + 1}`}
                    className="memory-image"
                  />
                  <div className="image-overlay">
                    <div className="overlay-hearts">
                      <span>💚</span>
                      <span>🌱</span>
                      <span>💚</span>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <span className="memory-number">Memory {index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bottom-decoration">
          <div className="love-quote">
            "In your love, I found my forever garden 🌿💚"
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemoryGallery