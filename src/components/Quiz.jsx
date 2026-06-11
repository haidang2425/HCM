import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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

export default function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Tải ngân hàng đề thi khổng lồ và ngẫu nhiên chọn 10 câu
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
    if (answers[current] !== undefined) return;
    setAnswers(prev => ({ ...prev, [current]: idx }));
    if (!isCorrect) {
      saveWrongQuestion(quizData[current]);
    }
  };

  const handleNext = () => {
    if (current < quizData.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleQuit = () => {
    if (window.confirm('Bạn có chắc chắn muốn kết thúc sớm bài làm không?')) {
      setShowResult(true);
    }
  };

  if (loading) {
    return (
      <div className="section text-center">
        <div className="container">
          <h2>Đang tải ngân hàng câu hỏi...</h2>
        </div>
      </div>
    );
  }

  const q = quizData[current];
  const levelColors = { 'easy': '#4CAF50', 'medium': '#FF9800', 'hard': '#C41E3A' };
  
  const correctIdx = q.options.findIndex(opt => opt.key === q.answer_key);
  const selected = answers[current];
  const isAnswered = selected !== undefined;
  const isCorrect = selected === correctIdx;

  const score = quizData.reduce((acc, q, i) => {
    if (answers[i] === undefined) return acc;
    const cIdx = q.options.findIndex(opt => opt.key === q.answer_key);
    return acc + (answers[i] === cIdx ? 1 : 0);
  }, 0);
  
  const answeredCount = Object.keys(answers).length;
  const pct = Math.round((score / quizData.length) * 100);

  if (showResult) {
    const gradeColor = pct >= 80 ? '#4CAF50' : pct >= 50 ? '#FF9800' : '#f44336';
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section text-center">
        <div className="container">
          <div className="quiz-result-card">
            <div className="quiz-result-icon">{pct >= 80 ? '🏆' : pct >= 50 ? '🎉' : '📚'}</div>
            <h2>Kết quả bài kiểm tra</h2>
            <div className="quiz-score-circle" style={{ borderColor: gradeColor }}>
              <span className="quiz-score">{score}/{quizData.length}</span>
              <span className="quiz-pct">{pct}%</span>
            </div>
            <div className="quiz-result-breakdown">
              <span className="breakdown-correct">✅ Đúng: {score}</span>
              <span className="breakdown-incorrect">❌ Sai: {answeredCount - score}</span>
              <span className="breakdown-skipped">⏭️ Bỏ qua: {quizData.length - answeredCount}</span>
            </div>
            <div className="quiz-actions" style={{marginTop: '20px'}}>
              <button className="btn btn-primary" onClick={() => {
                window.location.reload();
              }}>Làm lại (Ngẫu nhiên)</button>
              <button className="btn btn-outline" onClick={() => navigate('/review')}>Ôn câu sai</button>
              {pct >= 50 && (
                <button className="btn btn-gold" onClick={() => navigate('/certificate?score=' + score + '&total=' + quizData.length)}>
                  Nhận chứng nhận
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  const getOptionClass = (idx) => {
    if (!isAnswered) return selected === idx ? 'selected' : '';
    if (idx === correctIdx) return 'correct';
    if (idx === selected && idx !== correctIdx) return 'incorrect';
    return 'dimmed';
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section section-cream">
      <div className="container">
        <div className="quiz-header" style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px', flexWrap: 'wrap'}}>
            <h2 style={{margin: 0, fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', color: 'var(--ink)'}}>Quiz Mini</h2>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <div className="quiz-progress" style={{flexGrow: 1}}>
              <div className="quiz-progress-bar" style={{ width: ((current + 1) / quizData.length) * 100 + '%' }} />
            </div>
            <span className="quiz-count">{current + 1}/{quizData.length}</span>
          </div>
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
                {q.difficulty === 'easy' ? 'Dễ' : q.difficulty === 'hard' ? 'Khó' : 'Trung bình'}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--slate)', background: 'var(--cream)', padding: '4px 12px', borderRadius: '20px' }}>
                {q.chapter && q.chapter.match(/chuong_(\d+)/) ? `Chương ${q.chapter.match(/chuong_(\d+)/)[1]}` : 'Tổng hợp'}
              </span>
            </div>
            
            <h3 className="quiz-question">{q.question}</h3>

            <div className="quiz-options">
              {q.options.map((opt, idx) => (
                <motion.button
                  key={idx}
                  className={'quiz-option ' + getOptionClass(idx)}
                  onClick={() => handleAnswer(idx, idx === correctIdx)}
                  whileTap={!isAnswered ? { scale: 0.98 } : {}}
                  disabled={isAnswered}
                >
                  <span className="quiz-opt-letter">{opt.key}</span>
                  <span>{opt.text}</span>
                  {isAnswered && idx === correctIdx && <span className="quiz-opt-check">✓</span>}
                  {isAnswered && idx === selected && idx !== correctIdx && <span className="quiz-opt-cross">✗</span>}
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={'quiz-feedback ' + (isCorrect ? 'feedback-correct' : 'feedback-incorrect')}
                >
                  <div className="quiz-feedback-title">
                    {isCorrect ? '✅ Chính xác!' : '❌ Chưa đúng!'}
                    {!isCorrect && (
                      <span className="quiz-feedback-correct-ans" style={{display: 'block', marginTop: '10px'}}>
                        Đáp án đúng: <strong>{q.options[correctIdx].key}. {q.options[correctIdx].text}</strong>
                      </span>
                    )}
                  </div>
                  
                  <p className="quiz-feedback-explanation" style={{marginTop: '15px', fontStyle: 'italic'}}>
                    {renderExplanation(q.explanation_short || q.explanation)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div style={{display: 'flex', gap: '10px', marginTop: '30px', borderTop: '1px solid var(--slate-light)', paddingTop: '20px', flexWrap: 'wrap'}}>
              <button
                className="btn btn-primary"
                onClick={handlePrev}
                disabled={current === 0}
                style={{flex: 1, minWidth: '100px'}}
              >
                ← Câu trước
              </button>
              <button
                className="btn btn-primary"
                onClick={handleQuit}
                style={{flex: 1, minWidth: '100px'}}
              >
                Kết thúc sớm
              </button>
              <button
                className={'btn ' + (current === quizData.length - 1 ? 'btn-gold' : 'btn-primary')}
                onClick={handleNext}
                style={{flex: 1, minWidth: '100px'}}
              >
                {current === quizData.length - 1 ? '🏁 Nộp bài' : 'Câu tiếp →'}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
