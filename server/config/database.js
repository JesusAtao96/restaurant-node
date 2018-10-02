const mongoose = require('mongoose');

module.exports = {
    connect: () =>{ 
        mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
            if (err) throw err;
            console.log('Base de datos ONLINE');
        })
    },
    connection: () => {
        if (mongoose.connection)
            return mongoose.connection;
        return this.connect();
    }
}
