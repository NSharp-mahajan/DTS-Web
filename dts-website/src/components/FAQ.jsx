import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the Design Thinking Society?',
      answer: 'DTS is a creative innovation community helping students build real-world solutions through empathy, design, and collaboration.'
    },
    {
      question: 'How can I join DTS?',
      answer: 'Recruitment happens once a semester through tasks, interviews, and creative assessments.'
    },
    {
      question: 'What activities does DTS conduct?',
      answer: 'We host workshops, design sprints, brainstorming labs, creative challenges, and innovation-driven events.'
    },
    {
      question: 'What teams are part of DTS?',
      answer: 'Tech, Design, Marketing, Events, Operations, Research.'
    },
    {
      question: 'Do I need prior experience?',
      answer: 'No! Anyone passionate about creativity and learning is welcome.'
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="question-text">{faq.question}</span>
                <span className="toggle-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {openIndex === index ? (
                      <line x1="5" y1="12" x2="19" y2="12" />
                    ) : (
                      <>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </>
                    )}
                  </svg>
                </span>
              </button>
              
              <div className="faq-answer-wrapper">
                <div className="neon-line"></div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
