import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'component/Modal/Modal';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem( { webformatURL, tags, largeImageURL} ) {
  const[openModal, setOpenModal] = useState(false);


const toggle = () => {
    console.log('You chose a image');
    setOpenModal(openModal => !openModal);
  };

    return (
      <>
        <li className={styles.item} onClick={toggle}>
          <img
            loading="lazy"
            className={styles.image}
            src={webformatURL}
            alt={tags}
          />
        </li>
        {openModal && (
          <Modal toggle={toggle} image={largeImageURL} tags={tags} />
        )}
      </>
    );
  }

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
};


//////
// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import Modal from 'component/Modal/Modal';
// import styles from './ImageGalleryItem.module.css';

// export default class ImageGalleryItem extends Component {
//   state = {
//     openModal: false,
//   };

//   toggle = () => {
//     console.log('You chose a image');
//     this.setState(prev => {
//       return {
//         openModal: !prev.openModal,
//       };
//     });
//   };

//   render() {
//     const { toggle } = this;
//     const { openModal } = this.state;
//     const { largeImageURL, tags, webformatURL } = this.props;
//     return (
//       <>
//         <li className={styles.item} onClick={toggle}>
//           <img
//             loading="lazy"
//             className={styles.image}
//             src={webformatURL}
//             alt={tags}
//           />
//         </li>
//         {openModal && (
//           <Modal toggle={toggle} image={largeImageURL} tags={tags} />
//         )}
//       </>
//     );
//   }
// }

// ImageGalleryItem.propTypes = {
//   largeImageURL: PropTypes.string,
//   tags: PropTypes.string,
//   webformatURL: PropTypes.string,
// };
