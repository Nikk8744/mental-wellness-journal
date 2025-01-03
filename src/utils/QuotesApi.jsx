// src/utils/api.js
import axios from 'axios';


const api_url = 'https://api.api-ninjas.com/v1/quotes';

export const QuotesApi = async () => {

  try {
    const response = await axios.get(api_url, {
      headers: {
        "X-Api-Key": import.meta.env.VITE_API_KEY,
      }
    });
    // console.log("Response", response.data)
    if (response.data && response.data.length > 0) {
      return {
        quote: response.data[0].quote,
        author: response.data[0].author || "Unknown", 
        category: response.data[0].category,
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching quote:', error);
    return null;
  }
};
