import { StyledItem, StyledImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  toggleModal,
  tags,
  largeImageURL,
}) => {
  return (
    <StyledItem onClick={() => toggleModal({ id, largeImageURL, tags })}>
      <StyledImage src={webformatURL} alt={tags} />
    </StyledItem>
  );
};
