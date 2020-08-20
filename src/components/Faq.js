import React, { Component } from 'react';

import Faq from 'react-faq-component';

const data = {
  
  rows: [
    {
      title: "Who is the current chairman of WCE ACM?",
      content: "Saurabh Pande"
    },
    {
      title: "Which is the mega event of WCE ACM?",
      content: "WCE HACKATHON"
    },
    {
      title: "What is Jagruti?",
      content: "Jagruti is a social event conducted every year for women to enlighten them with simple sessions on how to operate new technologies."
    },
    {
      title: "What is WCE ACM?",
      content: "WCE ACM Student Chapter is a recently formed ACM student chapter in Walchand College of Engineering, Sangli. The chapter aims to conduct various technical & non-technical activities for overall development of the students of the institute."
    }]
}

class MyFaq extends Component {
  render() {
    return (
        <div className="card bg-light">
        <article
            className="card-body mx-auto card-body text-dark"
            style={{ maxWidth: "400px" }}
        >
            <h4 className="card-title mt-3 text-center faq-title" style={{borderBottom:'2px solid #49a1eb'}}>
              FAQs
            </h4>
            
        <Faq data={data}/>
        </article>
      </div>
    )
  }
}
export default MyFaq;
