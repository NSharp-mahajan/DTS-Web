import React from 'react';
import '../styles/AboutDTS.css';

const AboutDTS = () => {
  const steps = [
    {
      number: 1,
      title: 'Empathize',
      description: 'Understanding people and their needs',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    },
    {
      number: 2,
      title: 'Define',
      description: 'Identifying the right problem',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      number: 3,
      title: 'Ideate',
      description: 'Generating creative solutions',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547Z" />
        </svg>
      )
    },
    {
      number: 4,
      title: 'Prototype',
      description: 'Bringing concepts to life',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    },
    {
      number: 5,
      title: 'Test',
      description: 'Validating solutions with real users',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )
    }
  ];

  return (
    <section className="about-dts">
      <div className="about-dts-container">
        <h2 className="about-dts-heading">
          What is <span className="highlight">Design Thinking Society</span>?
        </h2>
        
        <p className="about-dts-description">
          Design Thinking Society is a student-led innovation community committed to fostering 
          creativity, empathy, critical thinking, and problem-solving excellence. We bring together 
          curious minds to explore real-world challenges and design meaningful, user-centered solutions 
          through collaborative learning.
        </p>

        <div className="design-process">
          <div className="process-steps">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="process-step"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="step-icon-wrapper">
                  <div className="step-number">{step.number}</div>
                  <div className="step-icon-circle">
                    <div className="step-icon">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="process-line"></div>
        </div>

        <p className="about-dts-footer">
          At DTS, we empower students to master this iterative process and transform ideas into 
          impactful innovations.
        </p>
      </div>
    </section>
  );
};

export default AboutDTS;

