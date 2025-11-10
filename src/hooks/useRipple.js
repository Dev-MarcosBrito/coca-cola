import { useEffect } from 'react';

export const useRipple = (buttonRef) => {
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleClick = (e) => {
      const ripple = button.querySelector('.btn-ripple');
      if (!ripple) return;

      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.marginLeft = '-50px';
      ripple.style.marginTop = '-50px';

      ripple.style.animation = 'none';
      setTimeout(() => {
        ripple.style.animation = 'ripple 0.6s ease-out';
      }, 10);
    };

    button.addEventListener('click', handleClick);
    return () => button.removeEventListener('click', handleClick);
  }, [buttonRef]);
};

