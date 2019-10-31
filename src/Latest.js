import React from 'react';
import axios from 'axios';
import API FROM './api';

// class for fetching latest comics using redux
// when the user goes to the latest page,
// the api call will fetch the latest image
// and it will be rendered on the page

export default class PersonList extends React.Component {
  state = {
    comics: []
  }

  componentDidMount() {
    API.get(`latest`)
      .then(res => {
        const comics = res.data;
        this.setState({ comics });
      })
  }

  render() {
    return (
      <div>
        { this.state.comics.map(comic => <div>{comic.latest}</div>)}
      </div>
    )
  }

  class Latest extends React.Component {
  	render() {
  		<div>
  			<Comic />
  		</div>
  	}
  }

  export default Latest;
