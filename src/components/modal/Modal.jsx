import { StyledOverlay, StyledModal } from './Modal.styled';

export const Modal = ({ close, content }) => {
  return (
    <StyledOverlay onClick={close}>
      <StyledModal>
        <img key={content.id} src={content.largeImageURL} alt={content.tags} />
      </StyledModal>
    </StyledOverlay>
  );
};
