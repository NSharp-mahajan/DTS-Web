import React from 'react';
import '../styles/Activities.css';
import graphicsImage from '../assets/graphics.png';

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: 'Workshops',
      description: 'Hands-on sessions to explore tools, frameworks, and creative problem-solving methods.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Design Sprints',
      description: 'Fast-paced collaborative challenges where students brainstorm, prototype, and test real ideas.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547Z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Innovation Talks',
      description: 'Sessions with industry leaders and innovators sharing insights on creativity and future technologies.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 10a2 2 0 0 0-2-2h-1V7a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" />
          <path d="M12 15v-3m0 0V9m0 3h3m-3 0H9" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Creative Challenges',
      description: 'Monthly challenges to ideate, build, and present impactful solutions to real problems.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="activities">
      <div className="activities-container">
        <h2 className="activities-heading">What do we organize for you?</h2>
        
        <div className="activities-content">
          <div className="activities-cards">
            {activities.map((activity, index) => (
              <div 
                key={activity.id} 
                className="activity-card"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="card-icon">
                  {activity.icon}
                </div>
                <h3 className="card-title">{activity.title}</h3>
                <p className="card-description">{activity.description}</p>
              </div>
            ))}
          </div>
          
          <div className="activities-visual">
            <div className="visual-wrapper">
              <div className="illustration-placeholder">
                <img src={graphicsImage} alt="DTS Activities Illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;

