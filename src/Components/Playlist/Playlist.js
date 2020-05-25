import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';
import App from '../App/App';

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
            <input defaultValue= {"New Playlist"} />
                < TrackList tracks={[{name: 'George', artist: 'Glasgow Kiss', album: 'Saturday Nights Alright', id: 1 },
                { name: 'name2', artist: 'artist2', alb;';;;pum: 'album2', id: 3 },
                    { name: 'name3', artist: 'artist3', album: 'album3', id: 2 }]}  />              
                

                <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
       )

    }
}
export default Playlist;

