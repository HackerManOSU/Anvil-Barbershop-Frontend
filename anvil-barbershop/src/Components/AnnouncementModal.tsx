import { useEffect, useRef } from 'react';

type AnnouncementModalProps = {
  title: string;
  message: string;
  dismissButtonText?: string;
  onClose: () => void;
};

const AnnouncementModal = ({
  title,
  message,
  dismissButtonText = 'Close',
  onClose,
}: AnnouncementModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4" role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="announcement-modal-title"
        aria-describedby="announcement-modal-description"
        className="w-full max-w-[640px] rounded-md border-2 border-double border-white bg-anvilBackground p-6 text-white shadow-[0_0_40px_rgba(0,0,0,0.7)]"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <h2 id="announcement-modal-title" className="text-3xl sm:text-4xl text-anvilRed">
            {title}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close announcement"
            className="h-11 w-11 shrink-0 rounded-sm border border-white text-2xl leading-none text-white transition-colors duration-300 hover:bg-anvilRed focus-visible:outline focus-visible:outline-4 focus-visible:outline-anvilLightRed"
          >
            x
          </button>
        </div>

        <p id="announcement-modal-description" className="times-new-roman text-lg sm:text-2xl leading-relaxed">
          {message}
        </p>

        <button
          type="button"
          onClick={onClose}
          className="times-new-roman mt-8 rounded-md bg-anvilRed px-5 py-3 text-lg text-white transition-colors duration-300 hover:bg-anvilLightRed focus-visible:outline focus-visible:outline-4 focus-visible:outline-anvilLightRed"
        >
          {dismissButtonText}
        </button>
      </div>
    </div>
  );
};

export default AnnouncementModal;
