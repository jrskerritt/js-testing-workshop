let _ = require('lodash');
let React = require('react');
let Player = require('./player');
let Track = require('./track');

const displayName = 'PlayerApp';

const tracks = [
    new Track({id: 1, name: 'Thrift Shop', artist: 'Macklemore'}),
    new Track({id: 2, name: 'Smells Like Teen Spirit', artist: 'Nirvana'}),
    new Track({id: 3, name: 'Creep', artist: 'Radiohead'})
];

class PlayerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            track: null
        };
    }

    _handleTrackClick(trackId) {
        this.setState({track: _.find(tracks, t => t.id === trackId)});
    }

    render() {
        let {track} = this.state;
        return <div className="playerApp">
            <h2>Select a song to play</h2>
            <ul>
                {tracks.map(track => <li key={track.id}>
                    <a onClick={() => this._handleTrackClick(track.id)}>
                        {track.name} - {track.artist}
                    </a>
                </li>)}
            </ul>
            <Player stream={{}} track={track} />
        </div>;
    }
}

PlayerApp.displayName = displayName;

module.exports = PlayerApp;
