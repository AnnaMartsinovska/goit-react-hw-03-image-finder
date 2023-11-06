import React from 'react';
import { StyledWrap } from './App.styled';
import { Searchbar } from './searchbar/Searchbar';
import { fetchImages } from '../services/api';
import { toast } from 'react-toastify';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Button } from './button/Button';
import { Modal } from './modal/Modal';

export default class App extends React.Component {
  state = {
    loading: false,
    error: null,
    images: [],
    q: '',
    per_page: 12,
    page: 1,
    isOpen: false,
    content: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { per_page, page, q } = this.state;
    if (prevState.page !== page || prevState.q !== q) {
      try {
        const data = await fetchImages({ per_page, page, q });
        this.setState(prev => ({ images: [...prev.images, ...data.hits] }));
      } catch (error) {
        this.setState({ error: error.message });
        toast.error(error.message);
      }
    }
  }

  handleSetQuerry = q => {
    this.setState({ q, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  toggleModal = content => {
    this.setState(prev => ({ isOpen: !prev.isOpen, content }));
  };

  render() {
    const { images, isOpen, content } = this.state;

    return (
      <StyledWrap>
        <Searchbar setQuerry={this.handleSetQuerry} />
        <ImageGallery images={images} toggleModal={this.toggleModal} />
        <Button onClick={this.handleLoadMore} />
        {isOpen ? <Modal content={content} close={this.toggleModal} /> : null}
      </StyledWrap>
    );
  }
}
