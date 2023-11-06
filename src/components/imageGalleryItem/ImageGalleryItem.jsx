import { StyledItem, StyledImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  toggleModal,
  largeImageURL,
}) => {
  return (
    <StyledItem onClick={() => toggleModal({ id, largeImageURL })}>
      <StyledImage src={webformatURL} alt="image" />
    </StyledItem>
  );
};
