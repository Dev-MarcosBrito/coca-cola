import React, { useState, useEffect } from 'react';

const PageLoader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setHidden(true);
      }, 800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (hidden) return null;

  return (
    <div className={`page-loader ${hidden ? 'hidden' : ''}`} id="pageLoader" aria-hidden="true">
      <div className="loader-content">
        <div className="loader-logo">
          <img src="/assets/img/cocacola.png" alt="Coca-Cola" className="loader-img" />
        </div>
        <div className="loader-spinner"></div>
      </div>
    </div>
  );
};

export default PageLoader;

