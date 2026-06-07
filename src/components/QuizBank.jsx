import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function QuizBank() {
  const [quizData, setQuizData] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [setupMode, setSetupMode] = useState(true);
  
  // Filters
  const [chapterFilter, setChapterFilter] = useState('all');
  const [countFilter, setCountFilter] = useState(30);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    // Lazy load the large JSON file
    import('../data/hcm_quiz_verified_public.json').then(module => {
      setAllQuestions(module.default.questions || []);
    });
  }, []);

  const handleStart = () => {
    let filtered = allQuestions;
    if (chapterFilter !== 'all') {
      filtered = filtered.filter(q => q.chapter === chapterFilter);
    }
    
    // Shuffle and pick
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    const selected = countFilter === 'all' ? shuffled : shuffled.slice(0, countFilter);
    
    if (selected.length === 0) {
      alert('Không tìm thấy câu hỏi phù hợp với bộ lọc!');
      return;
    }
    
    setQuizData(selected);
    setCurrent(0);
    setAnswers({});
    setShowResult(false);
    setSetupMode(false);
  };

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

  if (setupMode) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section container text-center">
        <div className="quiz-result-card" style={{maxWidth: '600px', margin: '0 auto'}}>
          <h2 style={{color: 'var(--red-dark)', marginBottom: '20px'}}>Ngân Hàng Trắc Nghiệm</h2>
          <p style={{marginBottom: '30px', color: 'var(--slate)'}}>
            Tổng hợp {allQuestions.length} câu hỏi. Hãy chọn thiết lập bài kiểm tra của bạn.
          </p>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left', marginBottom: '30px'}}>
            <div>
              <label style={{display: 'block', fontWeight: 'bold', marginBottom: '5px'}}>Chương học</label>
              <select 
                value={chapterFilter} 
                onChange={e => setChapterFilter(e.target.value)}
                style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid var(--slate-light)'}}
              >
                <option value="all">Tất cả các chương</option>
                <option value="chuong_1_nhap_mon">Chương 1</option>
                <option value="chuong_2_co_so_hinh_thanh">Chương 2</option>
                <option value="chuong_3_doc_lap_va_cnxh">Chương 3</option>
                <option value="chuong_4_dang_va_nha_nuoc">Chương 4</option>
                <option value="chuong_5_doan_ket">Chương 5</option>
                <option value="chuong_6_van_hoa_dao_duc_con_nguoi">Chương 6</option>
                <option value="tong_hop">Tổng hợp</option>
              </select>
            </div>
            
            <div>
              <label style={{display: 'block', fontWeight: 'bold', marginBottom: '5px'}}>Số lượng câu hỏi</label>
              <select 
                value={countFilter} 
                onChange={e => setCountFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                style={{width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid var(--slate-light)'}}
              >
                <option value={10}>10 câu</option>
                <option value={20}>20 câu</option>
                <option value={30}>30 câu</option>
                <option value={50}>50 câu</option>
                <option value="all">Toàn bộ ({allQuestions.length} câu)</option>
              </select>
            </div>
          </div>
          
          <button 
            className="btn btn-primary btn-lg" 
            onClick={handleStart}
            disabled={allQuestions.length === 0}
            style={{width: '100%', justifyContent: 'center'}}
          >
            {allQuestions.length === 0 ? 'Đang tải dữ liệu...' : 'Bắt đầu làm bài'}
          </button>
        </div>
      </motion.div>
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
              <button className="btn btn-outline" onClick={() => setSetupMode(true)}>Làm đề khác</button>
              <button className="btn btn-primary" onClick={() => navigate('/review')}>Ôn câu sai</button>
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
    if (!isAnswered) return '';
    if (idx === correctIdx) return 'correct';
    if (idx === selected && idx !== correctIdx) return 'incorrect';
    return 'dimmed';
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section section-cream">
      <div className="container">
        <div className="quiz-header" style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2 style={{margin: 0, fontSize: '1.5rem', color: 'var(--ink)'}}>Ngân Hàng Trắc Nghiệm</h2>
            <button className="btn btn-outline" onClick={handleQuit} style={{padding: '5px 15px', fontSize: '0.9rem'}}>Kết thúc sớm</button>
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
                    {q.explanation_short || q.explanation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div style={{display: 'flex', gap: '15px', marginTop: '30px', borderTop: '1px solid var(--slate-light)', paddingTop: '20px'}}>
              <button
                className="btn btn-outline"
                onClick={handlePrev}
                disabled={current === 0}
                style={{flex: 1}}
              >
                ← Câu trước
              </button>
              <button
                className={'btn ' + (current === quizData.length - 1 ? 'btn-gold' : 'btn-primary')}
                onClick={handleNext}
                style={{flex: 1}}
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
