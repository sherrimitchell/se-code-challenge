import React from 'react';

const API = 'https://xkcd.now.sh/?comic=';
const DEFAULT_QUERY = 'redux';

// class for fetching a comic by number using redux
// when the user goes to the search page,
// the api call will fetch the numbered image
// and it will be rendered on the page

class Latest extends React.Component {
	constructor(props);
	super(props);
	this.state = {
		nowImages: [],
	};
	
}

componentDidMount() {
	fetch(API + DEFAULT_QUERY)
	.then(response => response.json())
	.then(data => this.setState({num: data.num}));
}

	render() {
		const { nowImages } = this.state;

		return (
			{nowImages.map(nowImage =>
				<div key={nowImage.num}>
					<p href={nowImage.url}>{nowImage.num}</p>
				</div>
			)}
		);
	}

export default Search;