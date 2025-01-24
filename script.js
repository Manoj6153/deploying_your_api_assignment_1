require('dotenv').config();

const apiKey = process.env.API_KEY;
const secret = process.env.SERVER_SECRET || 'My self ';
const kalvian = process.env.IS_KALVIAN === 'true';

if (!kalvian) {
    console.error("Error: NOT A KALVIAN");
    process.exit(1);
}

console.log(`API key: ${apiKey}`);
console.log(`Secret message: ${secret}`);
console.log(`IS kalvian: ${kalvian}`);
