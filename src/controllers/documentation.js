

module.exports = app => {

    app.get('/documentation', (req, res) => {
        res.send('this is working')
    })
}