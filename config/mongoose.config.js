const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:8000/videogames', {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res) => {
    console.log('Video games are ready to be played')
}).catch((err) => {
    console.log(err, 'blow on the video game cartridge')
})