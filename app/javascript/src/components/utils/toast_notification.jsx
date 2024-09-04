import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast } from 'bootstrap';

export const ToastNotification = ({ show, message }) => {
  useEffect(() => {
    const toastElement = document.getElementById('myToast');
    const toast = new Toast(toastElement, {
      autohide: true
    });
    if (show) {
      toast.show();
    } else {
      toast.hide();
    }
  }, [show]);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="position-fixed top-0 end-0 p-3"
    >
      <div
        id="myToast"
        className="toast show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">Notification</strong>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              const toastElement = document.getElementById('myToast');
              const toast = new Toast(toastElement);
              toast.hide();
            }}
          />
        </div>
        <div className="toast-body">
          {message}
        </div>
      </div>
    </div>
  );
};
