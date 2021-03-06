const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost:27017/artworks${env}`;
const secret = process.env.SECRET || 'secret';
const exchangeRateApiKey = process.env.EXCHANGERATE_API_KEY;

module.exports = { port, dbURI, secret, env, exchangeRateApiKey };
