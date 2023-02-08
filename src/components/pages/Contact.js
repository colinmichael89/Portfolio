import { useState } from 'react';
import { Send } from 'react-bootstrap-icons';
import { send } from 'emailjs-com';

function Contact() {
  // let from_name;
  // let message;
  // let reply_to;

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const resetForm = () => {
    setToSend({ from_name: '', message: '', reply_to: '' });
  };

  //Needs required fields and validation
  const onSubmit = (e) => {
    e.preventDefault();
    // if (from_name && message && reply_to) {
    send(
      'service_ud18gvv',
      'template_v40rrq5',
      toSend,
      'Pty9ZVaZLcitnf1vX'
    ).then((response) => {
      alert('Message Sent!');
      resetForm();
    });
    // } else {
    //   alert('Must fill in all fields!');
    // }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <h2>Contact Me!</h2>
          <ul className="contacts">
            <li className="nav-cont">
              Email:{' '}
              <a className="email" href="mailto:colinmichael89@gmail.com">
                colinmichael89@gmail.com
              </a>
            </li>
            <li className="nav-cont">Phone: (405) 209-1486</li>
          </ul>
        </div>
        <div className="form-input">
          <label className="labels" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            name="from_name"
            placeholder="Your name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <label className="labels" htmlFor="message">
            Message
          </label>
          <input
            className="form-input message"
            type="text"
            rows="10"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
          <label className="labels" htmlFor="email">
            Your email
          </label>
          <input
            className="form-input"
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </div>
        <button className="submit btn btn-light" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;
