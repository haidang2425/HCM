import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ReviewWrong() {
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('hcm_wrong_questions') || '[]');
    setWrongQuestions(saved);
  }, []);



  if (wrongQuestions.length === 0) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section container text-center">
        <div className="quiz-result-card" style={{maxWidth: '600px', margin: '0 auto'}}>
          <h2 style={{color: 'var(--red-dark)', marginBottom: '20px'}}>Ôn tập câu sai</h2>
          <div style={{fontSize: '4rem', marginBottom: '20px'}}>🎉</div>
          <p style={{marginBottom: '30px', color: 'var(--slate)'}}>
            Tuyệt vời! Bạn không có câu hỏi nào cần ôn tập cả.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/quizbank')}>
            Làm thêm bài tập
          </button>
        </div>
      </motion.div>
    );
  }

  const q = wrongQuestions[current];
  const correctIdx = q.options.findIndex(opt => opt.key === q.answer_key);
  const isCorrect = selected === correctIdx;

  const handleAnswer = (idx) => {
    if (showFeedback) return;
    setSelected(idx);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelected(null);
    
    if (selected === correctIdx) {
      const newSaved = [...wrongQuestions];
      newSaved.splice(current, 1);
      setWrongQuestions(newSaved);
      localStorage.setItem('hcm_wrong_questions', JSON.stringify(newSaved));
      if (current >= newSaved.length && current > 0) {
        setCurrent(current - 1);
      }
    } else {
      if (current < wrongQuestions.length - 1) {
        setCurrent(current + 1);
      } else {
        setCurrent(0);
      }
    }
  };

  const getOptionClass = (idx) => {
    if (!showFeedback) return selected === idx ? 'selected' : '';
    if (idx === correctIdx) return 'correct';
    if (idx === selected && idx !== correctIdx) return 'incorrect';
    return 'dimmed';
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section section-cream">
      <div className="container">
        <div className="quiz-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
          <h2 style={{color: 'var(--red-dark)'}}>Ôn tập câu sai</h2>
          <span className="quiz-count">{current + 1} / {wrongQuestions.length} câu</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="quiz-card"
          >
            <h3 className="quiz-question">{q.question}</h3>

            <div className="quiz-options">
              {q.options.map((opt, idx) => (
                <motion.button
                  key={idx}
                  className={'quiz-option ' + getOptionClass(idx)}
                  onClick={() => handleAnswer(idx)}
                  whileTap={!showFeedback ? { scale: 0.98 } : {}}
                  disabled={showFeedback}
                >
                  <span className="quiz-opt-letter">{opt.key}</span>
                  <span>{opt.text}</span>
                  {showFeedback && idx === correctIdx && <span className="quiz-opt-check">✓</span>}
                  {showFeedback && idx === selected && idx !== correctIdx && <span className="quiz-opt-cross">✗</span>}
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={'quiz-feedback ' + (isCorrect ? 'feedback-correct' : 'feedback-incorrect')}
                >
                  <p className="quiz-feedback-explanation" style={{marginTop: '0', fontStyle: 'italic'}}>
                    {q.explanation_short || q.explanation}
                  </p>
                  
                  <div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
                    <button
                      className="btn btn-primary"
                      onClick={handleNext}
                      style={{flexGrow: 1, justifyContent: 'center'}}
                    >
                      Câu tiếp →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
