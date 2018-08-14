const fs = require('fs');
const path = require('path');

module.exports = function (app) {
    let getPictureNames = function (req, res) {
        let gallery = req.query.name
        let names = fs.readdirSync(path.join(__dirname, '..', '..', 'assets', gallery))
        res.send(names)
    };

    app.route('/api/gallery')
        .get(getPictureNames)
}
