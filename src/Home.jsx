import { useState } from 'react';

const Home = () => {
  const [showOptions, setShowOptions] = useState(false);

  const openWhatsApp = () => {
    window.open('https://wa.me/923346244646', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:saeedahmedbl68@gmail.com', '_blank');
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        {/* Text */}
        <div className="home-text">
          <h2>Hi, I'm</h2>
          <h1>SAEED AHMED</h1>
          <p>
            A passionate Front-end Developer &amp; Web Designer who loves creating
            clean, modern and user-friendly websites. And also learning full stack development.
            I have a strong foundation in HTML, CSS, JavaScript, and React, 
            and I'm always eager to learn new technologies and improve my skills.
          </p>
          {/* Hire Button */}
          <button
            className="hire-btn"
            onClick={() => setShowOptions(true)}
          >
            Hire Me
          </button>

          {/* Popup Options */}
          {showOptions && (
            <div className="contact-popup">
              <div className="popup-box">
                <h3>Contact Me</h3>

                <button onClick={openWhatsApp} className="popup-btn whatsapp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.4 0 .02 5.37.02 12a11.9 11.9 0 0 0 1.6 6L0 24l6.3-1.65a11.93 11.93 0 0 0 5.7 1.45h.01c6.65 0 12.03-5.37 12.03-12 0-3.2-1.25-6.21-3.52-8.32zM12.04 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.74.98 1-3.64-.23-.37A9.9 9.9 0 0 1 2.2 12C2.2 6.63 6.67 2.2 12.05 2.2c2.63 0 5.1 1.02 6.96 2.88a9.77 9.77 0 0 1 2.88 6.95c0 5.37-4.46 9.77-9.85 9.77zm5.7-7.34c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.21.31-.81 1-.99 1.2-.18.2-.36.22-.67.06-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.69-.96-2.31-.25-.6-.51-.52-.7-.53h-.6c-.21 0-.54.08-.82.39-.28.31-1.06 1.03-1.06 2.52s1.09 2.93 1.24 3.14c.16.21 2.14 3.27 5.18 4.58.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.36z"/>
                  </svg>
                </button>

                <button onClick={openEmail} className="popup-btn email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
                </button>

                <button
                  onClick={() => setShowOptions(false)}
                  className="popup-close"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
        </div>

        {/* Profile Image */}
        <div className="home-image">
          <div className="profile-circle">
            <img src="./profile.jpg" alt="Saeed Ahmed" />
            <div className="profile-placeholder">
            </div>
          </div>
        </div> 
    </section>
  );
};

export default Home;