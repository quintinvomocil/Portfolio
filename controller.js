const review = require('./db.json')
let globalId = 1

module.exports = {
    getMovies: (req, res) => res.status(200).send(review),
   
    createReview: (req, res) => {
        let { title, rating } = req.body
        let newMovie = {
            id: globalId,
            title, 
            rating,
        }
        movies.push(newMovie)
        res.status(200).send(review)
        globalId++
        alert("Your review has been submitted!")
    }
}
