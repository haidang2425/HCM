import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { rooms } from '../data/roomContent';
import { theoryData } from '../data/theoryData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    
    const searchLower = query.toLowerCase();
    const foundRooms = rooms.filter(r => 
      r.title.toLowerCase().includes(searchLower) || 
      (r.desc && r.desc.toLowerCase().includes(searchLower)) ||
      (r.subtitle && r.subtitle.toLowerCase().includes(searchLower))
    ).map(r => ({ type: 'room', id: r.id, title: `Phòng triển lãm: ${r.title}`, snippet: r.subtitle || r.desc }));

    const foundTheory = [];
    theoryData.forEach(chapter => {
      chapter.lessons.forEach(lesson => {
        if (lesson.title.toLowerCase().includes(searchLower) || lesson.summary.toLowerCase().includes(searchLower)) {
          foundTheory.push({
            type: 'theory',
            id: lesson.id,
            title: `Lý thuyết: ${lesson.title}`,
            snippet: lesson.summary
          });
        }
      });
    });

    setResults([...foundRooms, ...foundTheory]);
  }, [query]);

  const handleResultClick = (res) => {
    onClose();
    if (res.type === 'room') {
      navigate('/room/' + res.id);
    } else {
      navigate('/theory');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="search-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '100px'}}
        >
          <motion.div 
            className="search-modal-content"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            onClick={e => e.stopPropagation()}
            style={{background: 'var(--white)', width: '90%', maxWidth: '600px', borderRadius: 'var(--border-radius-lg)', padding: '20px', boxShadow: 'var(--shadow-xl)'}}
          >
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
              <h3 style={{margin: 0, color: 'var(--red-dark)'}}>Tìm kiếm thông tin</h3>
              <button onClick={onClose} style={{fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--slate)'}}>✕</button>
            </div>
            
            <input 
              type="text" 
              placeholder="Nhập từ khóa (vd: Pắc Bó, Bến Nhà Rồng...)" 
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoFocus
              style={{width: '100%', padding: '15px', borderRadius: 'var(--border-radius)', border: '2px solid var(--gold-light)', fontSize: '1.1rem', marginBottom: '20px', color: 'var(--ink)', backgroundColor: 'var(--cream)'}}
            />

            <div className="search-results" style={{maxHeight: '400px', overflowY: 'auto'}}>
              {query && results.length === 0 && (
                <p style={{textAlign: 'center', color: 'var(--slate)', padding: '20px'}}>Không tìm thấy kết quả nào phù hợp.</p>
              )}
              {results.map((res, i) => (
                <div 
                  key={i} 
                  className="search-result-item"
                  onClick={() => handleResultClick(res)}
                  style={{padding: '15px', borderBottom: '1px solid var(--cream-dark)', cursor: 'pointer', transition: 'background 0.2s'}}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--off-white)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <h4 style={{color: 'var(--red-primary)', marginBottom: '5px'}}>{res.title}</h4>
                  <p style={{fontSize: '0.9rem', color: 'var(--slate)', margin: 0}}>
                    {res.snippet ? res.snippet.substring(0, 100) + '...' : ''}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
