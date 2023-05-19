import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { Zoom } from 'react-toastify';
const FavoriteNotification = () => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  if (mount) {
    return ReactDOM.createPortal(
      <ToastContainer transition={Zoom} />,
      document.querySelector('#Favorite__Notification') as HTMLElement
    );
  }
  return null;
};

export default FavoriteNotification;
