import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizData } from '../data/quizData';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const q = quizData[current];
  const levelColors = { 'Cơ bản': '#4CAF50', 'Trung bình': '#FF9800', 'Nâng cao': '#C41E3A' };

  const handleAnswer = (idx) => {
    if (showFeedback) return;
    setSelected(idx);
    setAnswers(prev => ({ ...prev, [current]: idx }));
    setShowFeedback(true);
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

  const score = quizData.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0);
  const pct = Math.round((score / quizData.length) * 100);

  if (showResult) {
    const grade = pct >= 80 ? 'A' : pct >= 60 ? 'B' : pct >= 40 ? 'C' : 'D';
    const msg = pct >= 80 ? 'Xuất sắc! Bạn hiểu rất rõ về tư tưởng Hồ Chí Minh.' :
                pct >= 60 ? 'Tốt! Hãy tiếp tục tìm hiểu thêm.' :
                pct >= 40 ? 'Khá. Cần ôn tập thêm một chút.' : 'Cần cố gắng học tập thêm.';
    const gradeColor = pct >= 80 ? '#4CAF50' : pct >= 60 ? '#FF9800' : pct >= 40 ? '#2196F3' : '#f44336';
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section text-center">
        <div className="container">
          <div className="quiz-result-card">
            <div className="quiz-result-icon">{pct >= 80 ? '🏆' : pct >= 60 ? '🎉' : '📚'}</div>
            <h2>Kết quả bài kiểm tra</h2>
            <div className="quiz-score-circle" style={{ borderColor: gradeColor }}>
              <span className="quiz-score">{score}/{quizData.length}</span>
              <span className="quiz-pct">{pct}%</span>
              <span className="quiz-grade" style={{ color: gradeColor }}>{grade}</span>
            </div>
            <p className="quiz-msg">{msg}</p>
            <div className="quiz-result-breakdown">
              <span className="breakdown-correct">✅ Đúng: {score}</span>
              <span className="breakdown-incorrect">❌ Sai: {quizData.length - score}</span>
            </div>
            <div className="quiz-actions">
              <button className="btn btn-primary" onClick={() => {
                setCurrent(0); setAnswers({}); setSelected(null);
                setShowFeedback(false); setShowResult(false);
              }}>Làm lại</button>
              <button className="btn btn-gold" onClick={() => navigate('/certificate?score=' + score + '&total=' + quizData.length)}>
                Nhận chứng nhận
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  const isCorrect = selected === q.answer;

  const getOptionClass = (idx) => {
    if (!showFeedback) return selected === idx ? 'selected' : '';
    if (idx === q.answer) return 'correct';
    if (idx === selected && idx !== q.answer) return 'incorrect';
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
            <span className="quiz-level" style={{ background: levelColors[q.level] }}>{q.level}</span>
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
                  <span className="quiz-opt-letter">{String.fromCharCode(65 + idx)}</span>
                  <span>{opt}</span>
                  {showFeedback && idx === q.answer && <span className="quiz-opt-check">✓</span>}
                  {showFeedback && idx === selected && idx !== q.answer && <span className="quiz-opt-cross">✗</span>}
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
                    {isCorrect ? '✅ Chính xác!' : '❌ Chưa đúng!'}
                    {!isCorrect && (
                      <span className="quiz-feedback-correct-ans">
                        Đáp án đúng: <strong>{String.fromCharCode(65 + q.answer)}. {q.options[q.answer]}</strong>
                      </span>
                    )}
                  </div>
                  <p className="quiz-feedback-explanation">{q.explanation}</p>
                  <div className="quiz-feedback-source">
                    📚 Kiến thức này nằm ở: <strong>{q.source}</strong>
                  </div>
                  <button
                    className={'btn mt-8 ' + (current === quizData.length - 1 ? 'btn-gold' : 'btn-primary')}
                    onClick={handleNext}
                  >
                    {current === quizData.length - 1 ? '🏁 Xem kết quả' : 'Câu tiếp →'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
