import { useEffect } from 'react';
import logoUrl from '../../assets/logo.svg';
import './MobileMenu.css';

const MENU_ITEMS = [
  { label: 'Demos', hasSubmenu: true },
  { label: 'Post', hasSubmenu: true },
  { label: 'Features', hasSubmenu: true },
  { label: 'Categories', hasSubmenu: true },
  { label: 'Shop', hasSubmenu: true },
  { label: 'Buy Now', hasSubmenu: false },
];

function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
      <div className="mobile-menu__overlay" onClick={onClose} />

      <div className="mobile-menu__drawer">
        <div className="mobile-menu__header">
          <a href="/" className="mobile-menu__logo">
            <img className="mobile-menu__logo-image" src={logoUrl} alt="Logotype" />
          </a>

          <div className="mobile-menu__header-actions">
            <button className="mobile-menu__close" onClick={onClose}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <button className="mobile-menu__search">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>

        <nav className="mobile-menu__nav">
          <ul className="mobile-menu__list">
            {MENU_ITEMS.map((item) => (
              <li key={item.label} className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">
                  {item.label}
                  {item.hasSubmenu && (
                    <svg
                      className="mobile-menu__chevron"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M1 1l4 4 4-4" />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
