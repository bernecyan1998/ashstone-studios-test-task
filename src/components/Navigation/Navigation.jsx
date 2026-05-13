import { useState, useEffect, useRef } from 'react';
import './Navigation.css';

const NAV_ITEMS = [
  {
    label: 'Demos',
    submenu: ['Demo 1', 'Demo 2', 'Demo 3'],
  },
  {
    label: 'Post',
    submenu: ['Post Header', 'Post Layout', 'Share Buttons', 'Gallery Post', 'Video Post'],
  },
  {
    label: 'Features',
    submenu: ['Post Header', 'Post Layout', 'Share Buttons', 'Gallery Post', 'Video Post'],
  },
  {
    label: 'Categories',
    submenu: ['Lifestyle', 'Style', 'Events', 'Travel', 'Music'],
  },
  {
    label: 'Shop',
    submenu: ['Shop Page', 'Cart', 'Checkout'],
  },
  {
    label: 'Buy Now',
    submenu: null,
  },
];

function Navigation() {
  const [isHidden, setIsHidden] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const stickyTriggerY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      const navEl = navRef.current;

      if (!navEl) return;

      const isSticky = currentY > navEl.offsetTop;

      if (isSticky) {
        if (stickyTriggerY.current === 0) {
          stickyTriggerY.current = currentY;
        }

        const scrolledPastSticky = currentY - stickyTriggerY.current;
        const scrollingDown = currentY > lastScrollY.current;

        if (scrollingDown && scrolledPastSticky > 200) {
          setIsHidden(true);
        } else if (!scrollingDown) {
          setIsHidden(false);
        }
      } else {
        stickyTriggerY.current = 0;
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navigation${isHidden ? ' navigation--hidden' : ''}`}
      ref={navRef}
    >
      <ul className="navigation__list">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.label}
            className={`navigation__item ${item.submenu ? 'navigation__item--has-submenu' : ''}`}
          >
            <a href="#" className="navigation__link">
              {item.label}
              {item.submenu && (
                <svg
                  className="navigation__chevron"
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
            {item.submenu && (
              <ul className="navigation__submenu">
                {item.submenu.map((sub) => (
                  <li key={sub} className="navigation__submenu-item">
                    <a href="#" className="navigation__submenu-link">
                      <span className="navigation__submenu-text">{sub}</span>
                      <svg
                        className="navigation__submenu-chevron"
                        width="5"
                        height="8"
                        viewBox="0 0 5 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 1l3 3-3 3" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
