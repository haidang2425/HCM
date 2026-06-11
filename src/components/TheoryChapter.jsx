import { useState } from 'react';
import { theoryData } from '../data/theoryData';

// Helper to parse and render markdown-style links [label](url)
const renderExplanation = (text) => {
  if (!text) return null;
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }
    const label = match[1];
    const url = match[2];
    parts.push(
      <a 
        key={matchIndex} 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: 'var(--red-dark, #C41E3A)', textDecoration: 'underline', fontWeight: 'bold' }}
      >
        {label}
      </a>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

export default function TheoryChapter({ chapter }) {
  const [activeLesson, setActiveLesson] = useState(chapter.lessons[0]);
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlashcard = (idx) => {
    setFlippedCards({ ...flippedCards, [idx]: !flippedCards[idx] });
  };

  return (
    <div className="theory-chapter">
      <div className="chapter-header">
        <h2>{chapter.title}</h2>
      </div>
      
      <div className="theory-content-layout">
        <div className="lesson-sidebar">
          <h3>Các bài học</h3>
          <ul>
            {chapter.lessons.map(lesson => (
              <li 
                key={lesson.id} 
                className={activeLesson.id === lesson.id ? 'active' : ''}
                onClick={() => setActiveLesson(lesson)}
              >
                {lesson.title}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="lesson-content">
          <h3>{activeLesson.title}</h3>
          
          <div className="lesson-summary">
            <strong>Tóm tắt:</strong> {activeLesson.summary}
          </div>
          
          <div className="lesson-details">
            {activeLesson.details.map((detail, idx) => (
              <div key={idx} className="detail-section">
                <h4>{detail.heading}</h4>
                {detail.body.map((p, pIdx) => (
                  <p key={pIdx}>{renderExplanation(p)}</p>
                ))}
              </div>
            ))}
          </div>
          
          {activeLesson.flashcards && activeLesson.flashcards.length > 0 && (
            <div className="flashcards-section">
              <h4>Thẻ nhớ (Flashcards)</h4>
              <div className="flashcards-grid">
                {activeLesson.flashcards.map((fc, idx) => (
                  <div 
                    key={idx} 
                    className={`flashcard ${flippedCards[idx] ? 'flipped' : ''}`}
                    onClick={() => toggleFlashcard(idx)}
                  >
                    <div className="flashcard-inner">
                      <div className="flashcard-front">
                        <span className="fc-label">Câu hỏi</span>
                        <p>{fc.front}</p>
                      </div>
                      <div className="flashcard-back">
                        <span className="fc-label">Đáp án</span>
                        <p>{fc.back}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
