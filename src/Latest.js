import React from 'react';

// class for fetching latest comics using redux
// when the user goes to the latest page,
// the api call will fetch the latest image
// and it will be rendered on the page

const API = 'https://xkcd.now.sh/?comic=';
const DEFAULT_QUERY = 'redux';

class Latest extends React.Component {
	constructor(props);
	super(props);
	this.state = {
		latestImages: [],
	};
	
}

componentDidMount() {
	fetch(API + DEFAULT_QUERY)
	.then(response => response.json())
	.then(data => this.setState({latest: data.latest}));
}

	render() {
		const { latestImages } = this.state;

		return (
			{latestImages.map(latestImage =>
				<div key={latestImage.num}>
					<p href={latestImage.url}>{latestImage.latest}</p>
				</div>
			)}
		);
	}

export default Latest;
