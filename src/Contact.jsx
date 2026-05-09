import { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSending(true);
    // Simulate sending
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-inner">
        {/* Illustration */}
        <div className="contact-illustration fade-in">
          <div className="illus-circle">
            <svg viewBox="0 0 200 200" width="200" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Girl working on laptop */}
              {/* Chair */}
              <rect x="60" y="140" width="80" height="10" rx="5" fill="#5b2d9e" opacity="0.5"/>
              <rect x="55" y="150" width="8" height="40" rx="4" fill="#5b2d9e" opacity="0.4"/>
              <rect x="137" y="150" width="8" height="40" rx="4" fill="#5b2d9e" opacity="0.4"/>
              {/* Laptop */}
              <rect x="55" y="115" width="90" height="55" rx="8" fill="#3d1060" />
              <rect x="60" y="120" width="80" height="45" rx="5" fill="#1a0535" />
              <text x="100" y="150" textAnchor="middle" fill="#c9a8f5" fontSize="18">{'</>'}</text>
              {/* Body */}
              <ellipse cx="100" cy="108" rx="28" ry="20" fill="#4a1e8c" />
              {/* Head */}
              <ellipse cx="100" cy="80" rx="22" ry="24" fill="#f5d0a0" />
              {/* Hair */}
              <path d="M78 78 Q78 50 100 48 Q122 50 122 78 Q118 55 100 53 Q82 55 78 78Z" fill="#1a0535" />
              <path d="M78 78 Q74 95 80 105" stroke="#1a0535" strokeWidth="5" fill="none" />
              <path d="M122 78 Q126 95 120 105" stroke="#1a0535" strokeWidth="5" fill="none" />
              {/* Eyes & smile */}
              <ellipse cx="92" cy="80" rx="3" ry="3.5" fill="#2d1060" />
              <ellipse cx="108" cy="80" rx="3" ry="3.5" fill="#2d1060" />
              <path d="M93 91 Q100 97 107 91" stroke="#c9956a" strokeWidth="2" fill="none" strokeLinecap="round"/>
              {/* Headphones */}
              <path d="M78 73 Q78 55 100 55 Q122 55 122 73" stroke="#3d1060" strokeWidth="5" fill="none"/>
              <rect x="73" y="70" width="10" height="14" rx="5" fill="#6a1fc2"/>
              <rect x="117" y="70" width="10" height="14" rx="5" fill="#6a1fc2"/>
              {/* Envelope */}
              <rect x="130" y="55" width="35" height="25" rx="4" fill="#c9a8f5" opacity="0.8"/>
              <path d="M130 55 L147.5 68 L165 55" stroke="white" strokeWidth="2" fill="none"/>
              {/* Heart */}
              <text x="142" y="45" fontSize="14" fill="#ff6b9d">♥</text>
              {/* Message lines */}
              <line x1="30" y1="60" x2="55" y2="60" stroke="#c9a8f5" strokeWidth="2" opacity="0.6"/>
              <line x1="22" y1="72" x2="47" y2="72" stroke="#c9a8f5" strokeWidth="2" opacity="0.4"/>
              <line x1="30" y1="84" x2="50" y2="84" stroke="#c9a8f5" strokeWidth="2" opacity="0.3"/>
              {/* Plant */}
              <rect x="155" y="155" width="12" height="20" rx="3" fill="#78350f" opacity="0.6"/>
              <ellipse cx="161" cy="148" rx="12" ry="14" fill="#16a34a" opacity="0.7"/>
              <ellipse cx="155" cy="155" rx="8" ry="10" fill="#15803d" opacity="0.7"/>
              <ellipse cx="167" cy="153" rx="8" ry="10" fill="#22c55e" opacity="0.6"/>
            </svg>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-box fade-in">
          <h2>Let's Talk</h2>

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span style={{ color: '#7c2d2d', fontSize: '0.8rem' }}>{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span style={{ color: '#7c2d2d', fontSize: '0.8rem' }}>{errors.email}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <span style={{ color: '#7c2d2d', fontSize: '0.8rem' }}>{errors.message}</span>}
          </div>

          <button
            className={`send-btn ${sending ? 'sending' : ''}`}
            onClick={handleSubmit}
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>

          {sent && (
            <p className="success-msg">
              ✅ Message sent successfully! I'll get back to you soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;