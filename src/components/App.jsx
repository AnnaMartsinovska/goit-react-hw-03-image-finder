import React from 'react';
import { StyledWrap } from './App.styled';
import { Searchbar } from './searchbar/Searchbar';
import { fetchImages } from '../services/api';
import toast from 'toastify-js';

export default class App extends React.Component {
  state = {
    loading: false,
    error: null,
    images: [],
  };

  async componentDidMount() {
    try {
      const { hits } = await fetchImages();
      this.setState({ images: hits });
    } catch (error) {
      this.setState({ error: error.message });
      toast.error(error.message);
    }
  }

  render() {
    return (
      <div>
        <Searchbar />
        <StyledWrap></StyledWrap>
      </div>
    );
  }
}
