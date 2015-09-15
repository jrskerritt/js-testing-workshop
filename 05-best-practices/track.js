class Track {
    constructor(props) {
        if (!props) {
            props = {};
        }

        this.id = props.id;
        this.name = props.name;
        this.artist = props.artist;
    }
}

module.exports = Track;
