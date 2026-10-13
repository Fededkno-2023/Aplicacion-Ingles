import React, { useState, useEffect } from 'react';

export const OfflineStatusBanner: React.FC = () => {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    if (typeof window !== 'undefined') {
      setIsOffline(!navigator.onLine);
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="w-full bg-amber-500 text-white text-[12px] font-bold px-3 py-1.5 text-center flex items-center justify-center gap-1.5 shadow-sm"
    >
      <span className="material-symbols-outlined text-[16px]">wifi_off</span>
      <span>
        Modo sin conexión activo: ¡Puedes seguir practicando tus misiones con normalidad!
      </span>
    </div>
  );
};
