import React, { Fragment, useState } from 'react';
import ModalImage from './ModalImage';

function ImageCarousel() {
  const [currentImg, setCurrentImg] = useState(0);
  let data = [
    {
      id: 1,
      imageSrc:
        'https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 2,
      imageSrc:
        'https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 3,
      imageSrc:
        'https://images.unsplash.com/photo-1532609695641-d9e837f1c087?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 4,
      imageSrc:
        'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNxdWFyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 5,
      imageSrc:
        'https://images.unsplash.com/photo-1505299344687-ee45ad431f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNxdWFyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const Imglength = data.length;

  const nextImageHandler = () => {
    setCurrentImg(currentImg === Imglength - 1 ? 0 : currentImg + 1);
  };

  const prevImageHandler = () => {
    setCurrentImg(currentImg === 0 ? Imglength - 1 : currentImg - 1);
  };

  // console.warn(data)
  const getImg = (imageSrc) => {
    console.log(imageSrc);
    setImgSrc(imageSrc);
    setShowModal(true);
  };

  return (
    <Fragment>
      <section className='image-card'>
        <button className='left-btn' onClick={prevImageHandler}>
          prev
        </button>

        {data.map((item, index) => {
          return (
            <div>
              <div key={item.id} onClick={() => getImg(item.imageSrc)}>
                {index === currentImg && (
                  <img src={item.imageSrc} alt='Images' className='image' />
                )}
              </div>
              <ModalImage showModal={showModal}>
                <div
                  className={showModal ? 'modal open' : 'modal'}
                  onClick={() => setShowModal(false)}>
                  <img
                    src={imgSrc}
                    alt='Images'
                    className='modal-img'
                    key={item.id}
                  />
                </div>
              </ModalImage>
            </div>
          );
        })}

        <button className='right-btn' onClick={nextImageHandler}>
          next
        </button>
      </section>
    </Fragment>
  );
}
export default ImageCarousel;
