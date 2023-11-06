import { StyledImages } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ toggleModal, images = [] }) => {
  return (
    <StyledImages>
      {images.map(image => (
        <ImageGalleryItem toggleModal={toggleModal} key={image.id} {...image} />
      ))}
    </StyledImages>
  );
};
