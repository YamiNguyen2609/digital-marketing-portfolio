'use client'

import Image from 'next/image';
import { useData } from '@/context/DataContext';

export default function Sidebar() {
  const { data, loading } = useData();

  if (loading) {
    return (
      <aside className="sidebar">
        <div className="sidebar-avatar-wrap">
          <div className="loading-placeholder" />
        </div>
        <h1 className="sidebar-name">Loading...</h1>
      </aside>
    );
  }

  const personal = data?.personal;
  const contacts = data?.contacts || [];

  // Get specific contact info
  const getContact = (title: string) => contacts.find(c => c.title.toLowerCase() === title.toLowerCase());

  return (
    <aside className="sidebar">
      {/* Avatar */}
      <div className="sidebar-avatar-wrap">
        <Image
          src={personal?.avatarUrl || ''}
          alt={personal ? `${personal.firstName} ${personal.lastName}` : "Profile"}
          width={120}
          height={120}
          priority
        />
      </div>

      {/* Name & Title */}
      <h1 className="sidebar-name">
        {personal ? `${personal.firstName} ${personal.lastName}`.toUpperCase() : 'YOUR NAME'}
      </h1>
      <div className="sidebar-title">{personal?.major || 'Your Title'}</div>

      <div className="sidebar-sep" />

      {/* Contacts */}
      <ul className="sidebar-contacts">
        {contacts.map((contact) => (
          <li key={contact.id} className="sidebar-contact-item">
            <div className="sidebar-contact-icon">
              <i className={`fa fa-${contact.icon}`} aria-hidden="true"></i>
            </div>
            <div className="sidebar-contact-info">
              <div className="sidebar-contact-label">{contact.title}</div>
              <div className="sidebar-contact-value">{contact.description}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="sidebar-sep" />

      {/* Download CV */}
      {personal?.cvUrl && (
        <a href={personal.cvUrl} className="sidebar-cv-btn" target="_blank" rel="noopener noreferrer">
          <span>↓</span> Download CV
        </a>
      )}
    </aside>
  );
}
