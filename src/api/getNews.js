
import axios from "axios";

const optionsUSA = {
  method: 'GET',
  url: 'https://api.newscatcherapi.com/v2/search',
  params: {q: 'Cleveland', lang: 'en', sort_by: 'relevancy', page: '1'},
  headers: {
    'x-api-key': '6orwVgKbvG4w4tc3rUtwLDnGBQVGIJGuynBGLyq1lyw'
  }
};


export const searchNewsAboutUsa = async () => {
  const { data } = await axios.request(optionsUSA);
  return data;
}



const optionsPL = {
  method: 'GET',
  url: 'https://api.newscatcherapi.com/v2/search',
  params: {q: 'Poland', lang: 'en', sort_by: 'relevancy', page: '1'},
  headers: {
    'x-api-key': '6orwVgKbvG4w4tc3rUtwLDnGBQVGIJGuynBGLyq1lyw'
  }
};


export const searchNewsAboutPl = async () => {
  const { data } = await axios.request(optionsPL);
  return data;
}

const optionsUA = {
  method: 'GET',
  url: 'https://api.newscatcherapi.com/v2/search',
  params: {q: 'Ukraine', lang: 'en', sort_by: 'relevancy', page: '1'},
  headers: {
    'x-api-key': '6orwVgKbvG4w4tc3rUtwLDnGBQVGIJGuynBGLyq1lyw'
  }
};


export const searchNewsAboutUA = async () => {
  const { data } = await axios.request(optionsUA);
  return data;
}