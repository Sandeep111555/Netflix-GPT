import Groq from 'groq-sdk';
import { GROQ_CLOUD_API_KEY } from './Constaints';
const groq = new Groq({
  apiKey: GROQ_CLOUD_API_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});


export default groq;