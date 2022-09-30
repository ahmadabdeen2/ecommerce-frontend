import axios from "axios";
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
export const API_URL = `${API_ENDPOINT}`;
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json"
  }
});
export default class ApiService{
  static saveStripeInfo(data={}){
    return api.post(`${API_URL}/payment/save_stripe_info/`, data)
  }
}