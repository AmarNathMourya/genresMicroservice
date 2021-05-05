const router = require('express-promise-router')()
const { genresAdpater } = require('./controllers')

router.post(
  '/api/addGenres',
  genresAdpater.insertGenresRecord
)
router.get(
  '/api/fetchGenres/:name?',
  genresAdpater.fetchGenresData
)

router.delete('/api/removeGenres/:name', genresAdpater.deleteGenresRecord)

module.exports = router
