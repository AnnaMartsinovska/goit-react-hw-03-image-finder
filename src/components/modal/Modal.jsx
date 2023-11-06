import { StyledOverlay, StyledModal } from './Modal.styled';

export const Modal = ({ close, content }) => {
  return (
    <StyledOverlay>
      <StyledModal>
        <image key={content.id} src={content.largeImageURL} alt="Image" />
      </StyledModal>
    </StyledOverlay>
  );
};
