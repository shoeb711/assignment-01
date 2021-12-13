import React from 'react';

function ModalImage({ showModal, children}) {
  if (!showModal) return null;  // if we r not showing modal we render nothing

  return <div>{children}</div>;
}

export default ModalImage;
