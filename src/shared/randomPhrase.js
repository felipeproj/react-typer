export default function generateRandomPhrase(chars = 100) {
  const letters =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz_";
  let randomPhrase = "";
  for (let i = 0; i < chars; i++) {
    randomPhrase += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return randomPhrase;
}
