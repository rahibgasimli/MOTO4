import { useState } from 'react';
import '../pages/css/Faq.css';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <>
      <div className="faqs">
        <div className="faqHed">
          <h2>Tez tez verilən suallar</h2>
        </div>

        <div className="faq">
          <ul>
            {Array(4).fill().map((_, index) => (
              <li
                key={index}
                onClick={() => handleToggle(index)}
                className={activeIndex === index ? 'active' : ''}
              >
                {index === 0 ? 'I can’t find my car on your website' : 
                 index === 1 ? 'Can I sell a car on behalf of a family member or a friend?' :
                 index === 2 ? 'What documents should I have with me when I sell my car?' :
                 'Will you charge a fee if I decide not to sell my car to you?'}
                <p className={activeIndex === index ? 'visible' : ''}>Lorem, ipsum.</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Faq;
