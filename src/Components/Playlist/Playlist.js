import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';
import App from '../App/App';

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
            <input defaultValue= {"New Playlist"} />
                <TrackList playlist={this.props.playlist} />              
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
       )

    }
}
export default Playlist;

