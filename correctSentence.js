export default function correctSentence(text) {
  if (text[0] != text[0].toUpperCase()) {
    text = text[0].toUpperCase() + text.slice(1);
  }
  if (text.slice(-1) != '.') {
    text += '.'
  }
  return text;
}
