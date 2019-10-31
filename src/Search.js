// class for fetching a comic by number using redux
// when the user goes to the search page,
// the api call will fetch the numbered image
// and it will be rendered on the page

import React from 'react';
import axios from 'axios';
import API FROM './api';

export default class Search extends React.Component {
  state = {
    num: '',
  }

  handleChange = event => {
    this.setState({ num: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const comic = {
      num: this.state.num
    };

    API.get(`num`, { comic })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" num="num" onChange={this.handleChange} />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}



  class Search extends React.Component {
    render() {
      <div>
        <Comic />
      </div>
    }
  }

  export default Search;
