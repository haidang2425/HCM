import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // T?i ngân hàng d? thi kh?ng l? và ng?u nhiên ch?n 10 câu
    import('../data/hcm_quiz_verified_public.json').then(module => {
      const allQuestions = module.default.questions || [];
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      setQuizData(shuffled.slice(0, 10));
      setLoading(false);
    });
  }, []);

  const saveWrongQuestion = (q) => {
    const saved = JSON.parse(localStorage.getItem('hcm_wrong_questions') || '[]');
    if (!saved.find(sq => sq.id === q.id)) {
      saved.push(q);
      localStorage.setItem('hcm_wrong_questions', JSON.stringify(saved));
    }
  };

  const handleAnswer = (idx, isCorrect) => {
    if (showFeedback) return;
    setSelected(idx);
    setAnswers(prev => ({ ...prev, [current]: idx }));
    setShowFeedback(true);
    if (!isCorrect) {
      saveWrongQuestion(quizData[current]);
    }
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelected(null);
    if (current < quizData.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  if (loading) {
    return (
      <div className="section text-center">
        <div className="container">
          <h2>Ðang t?i ngân hàng câu h?i...</h2>
        </div>
      </div>
    );
  }

  const q = quizData[current];
  const levelColors = { 'easy': '#4CAF50', 'medium': '#FF9800', 'hard': '#C41E3A' };
  
  const correctIdx = q.options.findIndex(opt => opt.key === q.answer_key);
  const isCorrect = selected === correctIdx;

  const score = quizData.reduce((acc, q, i) => {
    const cIdx = q.options.findIndex(opt => opt.key === q.answer_key);
    return acc + (answers[i] === cIdx ? 1 : 0);
  }, 0);
  
  const pct = Math.round((score / quizData.length) * 100);

  if (showResult) {
    const gradeColor = pct >= 80 ? '#4CAF50' : pct >= 50 ? '#FF9800' : '#f44336';
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section text-center">
        <div className="container">
          <div className="quiz-result-card">
            <div className="quiz-result-icon">{pct >= 80 ? '??' : pct >= 50 ? '??' : '??'}</div>
            <h2>K?t qu? bài ki?m tra</h2>
            <div className="quiz-score-circle" style={{ borderColor: gradeColor }}>
              <span className="quiz-score">{score}/{quizData.length}</span>
              <span className="quiz-pct">{pct}%</span>
            </div>
            <div className="quiz-result-breakdown">
              <span className="breakdown-correct">? Ðúng: {score}</span>
              <span className="breakdown-incorrect">? Sai: {quizData.length - score}</span>
            </div>
            <div className="quiz-actions" style={{marginTop: '20px'}}>
              <button className="btn btn-primary" onClick={() => {
                const allQs = [...quizData].sort(() => 0.5 - Math.random()); // Reshuffle for replay?
                // Actually reloading the page is easier for random 10
                window.location.reload();
              }}>Làm l?i (Ng?u nhiên)</button>
              <button className="btn btn-outline" onClick={() => navigate('/review')}>Ôn câu sai</button>
              {pct >= 50 && (
                <button className="btn btn-gold" onClick={() => navigate('/certificate?score=' + score + '&total=' + quizData.length)}>
                  Nh?n ch?ng nh?n
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  const getOptionClass = (idx) => {
    if (!showFeedback) return selected === idx ? 'selected' : '';
    if (idx === correctIdx) return 'correct';
    if (idx === selected && idx !== correctIdx) return 'incorrect';
    return 'dimmed';
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section section-cream">
      <div className="container">
        <div className="quiz-header">
          <div className="quiz-progress">
            <div className="quiz-progress-bar" style={{ width: ((current + 1) / quizData.length) * 100 + '%' }} />
          </div>
          <span className="quiz-count">{current + 1}/{quizData.length}</span>
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
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
              <span className="quiz-level" style={{ background: levelColors[q.difficulty] || '#FF9800' }}>
                {q.difficulty === 'easy' ? 'D?' : q.difficulty === 'hard' ? 'Khó' : 'Trung bình'}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--slate)', background: 'var(--cream)', padding: '4px 12px', borderRadius: '20px' }}>
                {q.chapter_title}
              </span>
            </div>
            
            <h3 className="quiz-question">{q.question}</h3>

            <div className="quiz-options">
              {q.options.map((opt, idx) => (
                <motion.button
                  key={idx}
                  className={'quiz-option ' + getOptionClass(idx)}
                  onClick={() => handleAnswer(idx, idx === correctIdx)}
                  whileTap={!showFeedback ? { scale: 0.98 } : {}}
                  disabled={showFeedback}
                >
                  <span className="quiz-opt-letter">{opt.key}</span>
                  <span>{opt.text}</span>
                  {showFeedback && idx === correctIdx && <span className="quiz-opt-check">?</span>}
                  {showFeedback && idx === selected && idx !== correctIdx && <span className="quiz-opt-cross">?</span>}
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
                  <div className="quiz-feedback-title">
                    {isCorrect ? '? Chính xác!' : '? Chua dúng!'}
                    {!isCorrect && (
                      <span className="quiz-feedback-correct-ans" style={{display: 'block', marginTop: '10px'}}>
                        Ðáp án dúng: <strong>{q.options[correctIdx].key}. {q.options[correctIdx].text}</strong>
                      </span>
                    )}
                  </div>
                  
                  <p className="quiz-feedback-explanation" style={{marginTop: '15px', fontStyle: 'italic'}}>
                    {q.explanation_short || q.explanation}
                  </p>
                  
                  <div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
                    <button
                      className={'btn ' + (current === quizData.length - 1 ? 'btn-gold' : 'btn-primary')}
                      onClick={handleNext}
                      style={{flexGrow: 1, justifyContent: 'center'}}
                    >
                      {current === quizData.length - 1 ? '?? Xem k?t qu?' : 'Câu ti?p ?'}
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
