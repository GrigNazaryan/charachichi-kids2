import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useLanguage } from './translations/LanguageContext';

function Contacts() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send(
        'service_e0p6zqp',    
        'template_8j19lnw',   
        formData,
        'mcnul6eHahCA4Mqbr'   
      )
      .then(
        () => {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <section className='contacts_section row'>
      <h2>{t.contacts.title}</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }} className='form'>
        <div className='label_box'>
          <label htmlFor="name">{t.contacts.labels.name}</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='label_box'>
          <label htmlFor="email">{t.contacts.labels.email}</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='label_box2'>
          <label htmlFor="message">{t.contacts.labels.message}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
          />
        </div>
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t.contacts.buttons.sending : t.contacts.buttons.send}
        </button>
        {status === 'success' && <p style={{ color: 'green' }}>{t.contacts.status.success}</p>}
        {status === 'error' && <p style={{ color: 'red' }}>{t.contacts.status.error}</p>}
      </form>
      <p style={{ marginTop: 20, textAlign: 'center' }}>{t.contacts.note}</p>
    </section>
  );
}

export default Contacts;
