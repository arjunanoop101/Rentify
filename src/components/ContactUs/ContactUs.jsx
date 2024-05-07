import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [result, setResult] = React.useState('');
  const [formData, setFormData] = React.useState({ email: '', message: '' });

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apikey: '2c5e45fe-d594-4d28-a58f-117ceccd634b', 
        ...formData,
      }),
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
      setResult(res.message);
    } else {
      console.error('Error', res);
      setResult(res.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact" id="contact-us">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></input>
        </form>
          <button type="submit">Submit</button>
          <span>{result}</span>
      </div>
    </div>
  );
};

export default ContactUs;
