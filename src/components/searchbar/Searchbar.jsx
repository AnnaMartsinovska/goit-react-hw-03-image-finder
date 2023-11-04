import {
  StyledHeader,
  StyledForm,
  StyledFormButton,
  StyledButtonLabel,
  StyledInput,
} from './Searchbar.styled';

export const Searchbar = () => {
  <StyledHeader>
    <StyledForm>
      <StyledFormButton type="submit">
        <StyledButtonLabel>Search</StyledButtonLabel>
      </StyledFormButton>

      <StyledInput
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </StyledForm>
  </StyledHeader>;
};
