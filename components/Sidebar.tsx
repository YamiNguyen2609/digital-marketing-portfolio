import Image from 'next/image';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Avatar */}
      <div className="sidebar-avatar-wrap">
        <Image src="/images/avatar.png" alt="Ngan Pham" width={120} height={120} priority />
      </div>

      {/* Name & Title */}
      <h1 className="sidebar-name">PHAM TRAN THANH NGAN</h1>
      <div className="sidebar-title">Digital Marketing</div>

      <div className="sidebar-sep" />

      {/* Contacts */}
      <ul className="sidebar-contacts">
        <li className="sidebar-contact-item">
          <div className="sidebar-contact-icon">✉</div>
          <div className="sidebar-contact-info">
            <div className="sidebar-contact-label">Email</div>
            <div className="sidebar-contact-value">thanhnganpt2001@gmail.com</div>
          </div>
        </li>
        <li className="sidebar-contact-item">
          <div className="sidebar-contact-icon">📞</div>
          <div className="sidebar-contact-info">
            <div className="sidebar-contact-label">Phone</div>
            <div className="sidebar-contact-value">+84 934 627 703</div>
          </div>
        </li>
        <li className="sidebar-contact-item">
          <div className="sidebar-contact-icon">💬</div>
          <div className="sidebar-contact-info">
            <div className="sidebar-contact-label">Zalo</div>
            <div className="sidebar-contact-value">+84 934 627 703</div>
          </div>
        </li>
        <li className="sidebar-contact-item">
          <div className="sidebar-contact-icon">📍</div>
          <div className="sidebar-contact-info">
            <div className="sidebar-contact-label">Location</div>
            <div className="sidebar-contact-value">Tan Phu, Ho Chi Minh City, Viet Nam</div>
          </div>
        </li>
      </ul>

      <div className="sidebar-sep" />

      {/* Social links */}
      {/* <div className="sidebar-socials">
        <a href="#" className="sidebar-social-btn" title="Twitter">𝕏</a>
        <a href="#" className="sidebar-social-btn" title="LinkedIn">in</a>
        <a href="#" className="sidebar-social-btn" title="GitHub">⌥</a>
        <a href="#" className="sidebar-social-btn" title="Dribbble">⊕</a>
        <a href="#" className="sidebar-social-btn" title="Behance">Be</a>
      </div> */}

      {/* Download CV */}
      <a href="#" className="sidebar-cv-btn">
        <span>↓</span> Download CV
      </a>
    </aside>
  );
}
