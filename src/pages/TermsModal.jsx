import React from 'react';

export default function TermsModal({ isOpen, onClose, onAccept }) {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'white',
          borderRadius: '16px',
          maxWidth: '700px',
          maxHeight: '80vh',
          overflow: 'auto',
          padding: '40px',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#f7fafc',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            fontSize: '20px'
          }}
        >
          ✕
        </button>

        <h2 style={{ fontSize: '26px', marginBottom: '20px' }}>
          📋 Terms and Conditions
        </h2>

        <div style={{ color: '#4a5568', lineHeight: '1.8', fontSize: '14px' }}>
          <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>
            1. Acceptable Use Policy
          </h3>
          <p>By using this Lost & Found system, you agree to:</p>
          <ul>
            <li>Provide truthful and accurate information</li>
            <li>Upload only legitimate photos of lost/found items</li>
            <li>Not upload illegal, inappropriate, or offensive content</li>
            <li>Respect others' privacy and property rights</li>
          </ul>

          <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '12px' }}>
            2. Prohibited Content
          </h3>
          <p>You may NOT upload:</p>
          <ul>
            <li>❌ Illegal materials</li>
            <li>❌ Sexually explicit or pornographic content</li>
            <li>❌ Hate speech or harassment</li>
            <li>❌ Violent or disturbing imagery</li>
            <li>❌ Copyrighted material without authorization</li>
            <li>❌ Spam or misleading information</li>
          </ul>

          <div style={{
            background: '#fef5e7',
            border: '2px solid #f39c12',
            borderRadius: '8px',
            padding: '16px',
            marginTop: '24px'
          }}>
            <p style={{ margin: 0, fontWeight: '600', color: '#d68910' }}>
              ⚠️ Important: Violations may result in legal consequences.
            </p>
          </div>
        </div>

        <div style={{ 
          marginTop: '32px',
          display: 'flex',
          gap: '12px',
          justifyContent: 'flex-end'
        }}>
          <button
            onClick={onClose}
            style={{
              padding: '12px 24px',
              background: '#e2e8f0',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Decline
          </button>
          <button
            onClick={() => {
              onAccept();
              onClose();
            }}
            style={{
              padding: '12px 24px',
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            ✓ Accept Terms
          </button>
        </div>
      </div>
    </div>
  );
}
