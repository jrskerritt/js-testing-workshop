let _ = require('lodash');
let React = require('react');
let streamService = require('./streamService');
let StreamController = require('./streamController');
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
            stream: null,
            track: null
        };
    }

    _handleTrackClick(trackId) {
        this.setState({track: _.find(tracks, t => t.id === trackId)});

        streamService.getStream(trackId)
            .done(stream => {
                this.setState({stream: new StreamController(stream)});
            }).fail(() => {
                this.setState({stream: new StreamController({})});
            });
    }

    render() {
        let {stream, track} = this.state;
        return <div className="playerApp">
            <h2>Select a song to play</h2>
            <ul>
                {tracks.map(track => <li key={track.id}>
                    <a onClick={() => this._handleTrackClick(track.id)}>
                        {track.name} - {track.artist}
                    </a>
                </li>)}
            </ul>
            <Player stream={stream} track={track} />
        </div>;
    }
}

PlayerApp.displayName = displayName;

module.exports = PlayerApp;
