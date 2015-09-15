let $ = require('jquery');

module.exports = {
    getStream: function (trackId) {
        return $.ajax({
            url: '/my/cool/web/service/getStream/',
            type: 'POST',
            data: trackId
        });
    }
};
