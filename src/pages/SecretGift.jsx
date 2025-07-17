import React, { useState } from 'react';
import './SecretGift.css'

const SecretGift = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <div className="sg-love-container">
      <div className="sg-floating-hearts">
        <div className="sg-heart sg-heart1">💚</div>
        <div className="sg-heart sg-heart2">🌿</div>
        <div className="sg-heart sg-heart3">💚</div>
        <div className="sg-heart sg-heart4">🍃</div>
        <div className="sg-heart sg-heart5">💚</div>
        <div className="sg-heart sg-heart6">🌱</div>
      </div>
             
      <div className="sg-gift-card">
        <div className="sg-card-header">
          <div className="sg-love-border"></div>
          <h1 className="sg-gift-title">
            <span className="sg-title-icon">🌹</span>
            Just for You
            <span className="sg-title-icon">🌹</span>
          </h1>
          <div className="sg-love-border"></div>
        </div>
                 
        <div className="sg-romantic-pattern">
          <div className="sg-pattern-row">
            <span>💚</span><span>🌿</span><span>💚</span><span>🌿</span><span>💚</span>
          </div>
        </div>
         
        <p className="sg-love-message">
          This is something very close to my heart... written for the one I love the most.
          <br />
          <span className="sg-message-accent">You are my everything 💚</span>
        </p>
         
        <div className="sg-vine-decoration">
          <div className="sg-vine-left">🌿🍃🌱</div>
          <div className="sg-vine-right">🌱🍃🌿</div>
        </div>
         
        <div className="sg-reveal-section">
          {!isRevealed ? (
            <button
              onClick={handleReveal}
              className="sg-reveal-btn"
            >
              <span className="sg-btn-icon">💌</span>
              Reveal My Love Letter
              <span className="sg-btn-sparkle">✨</span>
            </button>
          ) : (
            <div className="sg-love-poem">
              <div className="sg-poem-header">
                <span className="sg-poem-icon">💕</span>
                <h2 className="sg-poem-title">My Heart's Words</h2>
                <span className="sg-poem-icon">💕</span>
              </div>
              
              <div className="sg-poem-content">
                <p className="sg-poem-verse">
                  Unathu udaiyil oru nool aga irunthal kooda ,<br />
                  En vazhkai bayanai adaivaen !.<br />
                  
                </p>
                
                <p className="sg-poem-verse">
                  Unathu arugil unthan kai korthu oru neenda payanam<br />
                  Ithai vida oru azhagiya kavithai vendumaa!!!!.<br />
                  
                </p>
                
                <p className="sg-poem-verse">
                  I LOVE YOU TILL MY LAST BREATH RENU <br />
                  And I'm being proud to be your partner.....<br />
                  Together we'll flourish, together we're strong. <br /><br />
                                    ...Cringe pro max aana ithula unakaga na yosichan...

                </p>
                
                <div className="sg-poem-signature">
                  <span className="sg-signature-text">With all my love,</span>
                  <span className="sg-signature-heart">💚 Always yours 💚</span>
                </div>
              </div>
            </div>
          )}
        </div>
         
        <div className="sg-romantic-pattern">
          <div className="sg-pattern-row">
            <span>🌸</span><span>💚</span><span>🌸</span><span>💚</span><span>🌸</span>
          </div>
        </div>
         
        <p className="sg-love-note">
          One more thing I wanted to say...that I hope this makes you smile just as much as you make me smile every day.
          <br />
          <span className="sg-note-hearts">💚 Forever yours 💚</span>
        </p>
      </div>
    </div>
  );
};

export default SecretGift;