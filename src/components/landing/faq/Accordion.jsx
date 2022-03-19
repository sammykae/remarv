import React, { useState } from 'react';
import Fade from 'react-reveal/Fade'
const Accordion = ({title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div><span>{isActive ? '-' : '+'}</span> &nbsp;&nbsp;{title}</div>
      </div>
      {isActive && <Fade duration={2000} ><div className="accordion-content">{content}</div></Fade>}
    </div>
  );
};

export default Accordion;