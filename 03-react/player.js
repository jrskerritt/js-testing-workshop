let React = require('react');

const displayName = 'Player';
const propTypes = {
    track: React.PropTypes.object
};

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paused: true
        };
    }

    _handlePlayClick() {
        this.setState({paused: false});
    }

    _handlePauseClick() {
        this.setState({paused: true});
    }

    _renderPlayButton() {
        return <button onClick={() => this._handlePlayClick()}>
            Play
        </button>;
    }

    _renderPauseButton() {
        return <button onClick={() => this._handlePauseClick()}>
            Pause
        </button>;
    }

    _renderTrackLabel() {
        let {track} = this.props;
        let label;

        if (!track) {
            label = '--select a song--';
        } else {
            label = `${track.name} - ${track.artist}`;
        }

        return <span className="trackLabel">{label}</span>;
    }

    render() {
        return <div className="player">
            {this._renderTrackLabel()}
            {this.state.paused ?
                this._renderPlayButton() :
                this._renderPauseButton()}
        </div>;
    }
}

Player.displayName = displayName;
Player.propTypes = propTypes;

module.exports = Player;
