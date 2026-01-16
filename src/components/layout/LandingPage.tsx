import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="profile-image-container">
          <img 
            src="/profile.jpg" 
            alt="Profile" 
            className="profile-image"
            onError={(e) => {
              // Fallback to a placeholder if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const placeholder = target.parentElement?.querySelector('.profile-placeholder');
              if (placeholder) {
                (placeholder as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div className="profile-placeholder" style={{ display: 'none' }}>
            <span>Your Photo</span>
          </div>
        </div>
        <div className="intro-section">
          <h1 className="intro-name">Hermann Kuschke</h1>
          <p className="intro-text">
            Welcome to my personal website. I'm a developer passionate about creating 
            innovative solutions and sharing knowledge with the community. 
            Explore my projects and get in touch!
          </p>
          <div className="contact-info">
            <a href="mailto:hermann.kuschke@gmail.com" className="email-link">
              hermann.kuschke@gmail.com
            </a>
          </div>
          <div className="tech-note">
            Built with React
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
