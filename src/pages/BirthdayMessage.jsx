import React from 'react'
import "./BirthdayMessage.css"

const BirthdayMessage = () => {
  return (
    <div className="birthday-container">
      <div className="love-pattern pattern-1"></div>
      <div className="love-pattern pattern-2"></div>
      <div className="love-pattern pattern-3"></div>
      <div className="love-pattern pattern-4"></div>
      
      <div className="floating-hearts">
        <div className="heart heart-1">💚</div>
        <div className="heart heart-2">💖</div>
        <div className="heart heart-3">💚</div>
        <div className="heart heart-4">💕</div>
        <div className="heart heart-5">💚</div>
        <div className="heart heart-6">💗</div>
      </div>
      
      <div className="message-content">
        <div className="love-border">
          <p >
              Renu, Naa tha dii un aalu pesuran nee adikadi overthink panitu enta vanthu sanda poduvila avan than.
              Ithu unakaga naa eppavum irupan nu solrathuku oru china message than. Actually atha na solanum nu ila unakey theriyum, Theriyanum ila kondruvan una,
              " I will never LEAVE YOU AT ANY SITUATION " Naa itha munadiye unta solirukan 
              And u Know that I will stand with my words athuku tha naa ethum ama ila okay solum pothu avalo yosipan. <br /><br />
              Aprom Madam jii "I LOVE YOU"
          </p>
        </div>
      </div>
      
      <div className="sparkles">
        <div className="sparkle sparkle-1">✨</div>
        <div className="sparkle sparkle-2">⭐</div>
        <div className="sparkle sparkle-3">✨</div>
        <div className="sparkle sparkle-4">⭐</div>
        <div className="sparkle sparkle-5">✨</div>
      </div>
    </div>
  )
}

export default BirthdayMessage