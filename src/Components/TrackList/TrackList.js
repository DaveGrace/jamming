import React from 'react';

import './TrackList.css';

import Track from '../Track/Track';
import SearchResults from '../SearchResults/SearchResults';
import App from '../App/App';

class TrackList extends React.Component {
    render() {
        return (
             <div className="TrackList">
                {
                   this.props.playlist && this.props.playlist.map(track => {
                        return <Track track={track}
                            key={track.id} />
                    })
                }
        </div>
        )
    }

}
export default TrackList;