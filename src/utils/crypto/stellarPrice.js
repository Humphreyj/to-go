import axios from 'axios';
const coin_API_KEY =  'b11da64dda6738ee93296df31ad2d9e889f1f8777923eee55ccb14229e8d17fe'
export const getStellarPrice = () => {
  axios
  .get(`https://min-api.cryptocompare.com/data/price?fsym=XLM&tsyms=USD,EUR&api_key=${coin_API_KEY}`)
  .then(res => {
    console.log(res.data.USD)
    return res.data.USD
  })
  .catch(err => {
    console.log(err)
  })
}

