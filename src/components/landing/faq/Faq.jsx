import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './content'

const Faq = () => {
    return (
        <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <div className="accordion">
          {accordionData.map(({ id,title, content }) => (
            <Accordion key={id} title={title} content={content} />
          ))}
        </div>
      </div>
    )
}

export default Faq
