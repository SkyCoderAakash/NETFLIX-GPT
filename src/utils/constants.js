const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDFiYTFlMTk3OTM3ODhiMzQ2OGJkNmRiNzdmM2VjOCIsInN1YiI6IjY1YThlNGNiOGVkYTg3MDEzNDg1Y2IwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A5hJE0-ZJxgILc-g5LnZpZw7moB7BwcQdtfSagyBx4c'
    }
};

const OPEN_AI_KEY = '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';

const supportedLanguage = [
  {
    name : "English",
    value : "en"
  },
  {
    name : "Hindi",
    value : "hindi"
  },
  {
    name : "Spanish",
    value : "spanish"
  },
]

export {API_OPTIONS, supportedLanguage, OPEN_AI_KEY};