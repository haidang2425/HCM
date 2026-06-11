import { useState } from 'react';
import { theoryData } from '../data/theoryData';
import TheoryChapter from './TheoryChapter';
import { Link } from 'react-router-dom';

export default function Theory() {
  const [activeChapterId, setActiveChapterId] = useState(theoryData[0].id);

  const activeChapter = theoryData.find(c => c.id === activeChapterId);

  return (
    <div className="theory-page container section">
      <h1 className="section-title">Lý thuyết Tư tưởng Hồ Chí Minh</h1>
      <p className="section-subtitle">
        Tài liệu học tập nội bộ với các bài học tóm tắt và thẻ nhớ ôn tập.
      </p>

      <div className="theory-container">
        <aside className="theory-sidebar">
          <h3>Mục lục</h3>
          <ul>
            {theoryData.map(chapter => (
              <li 
                key={chapter.id} 
                className={activeChapterId === chapter.id ? 'active' : ''}
                onClick={() => setActiveChapterId(chapter.id)}
              >
                {chapter.title}
              </li>
            ))}
          </ul>
          
          <div className="theory-sidebar-actions mt-8">
            <Link to="/quizbank" className="btn btn-primary" style={{width: '100%', justifyContent: 'center'}}>Làm quiz kiểm tra</Link>
          </div>
        </aside>

        <main className="theory-main">
          <TheoryChapter key={activeChapter.id} chapter={activeChapter} />
        </main>
      </div>
    </div>
  );
}
