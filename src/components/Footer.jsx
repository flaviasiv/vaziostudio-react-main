import '../styles/footer.css';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a mailto link with the user's email in the subject or body
    window.location.href = `mailto:vaziodesignstudio@gmail.com?subject=Contact from ${email}&body=Email: ${email}`;
    setEmail('');
  };

  return (
    <footer>
      <div className="contact" id="contact">
        <div className="contact-left">
          {/*<h6 className="h6footer1">SAY HELLO</h6>
           <h6 className="h6footer2">
            SAY <br />
            HELLO
          </h6> */}
        </div>
        <div className="contactlink">
          <p>
            Planning to start a project or just to say hi? Reach out by email and we'll do our best to reply within 24 hours!
          </p>
          {/* <form className="email-form" onSubmit={handleSubmit}>
            <div className="email-input-wrapper">
              <svg
                className="email-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                  fill="#9A9A9A"
                />
              </svg>
              <input
                type="email"
                placeholder="SAY HELLO"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </form> */}
            <button className='bntemail'>
              <a href="mailto:vaziodesignstudio@gmail.com"><svg
                className="email-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                  fill="#9A9A9A"
                />
              </svg>SAY HI!</a>
            </button>              
        </div>
      </div>
      <h1 className="signatureH">VAZIO</h1>
    </footer>
  );
};

export default Footer;
