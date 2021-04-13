const Text = ({ addEmoji, addBracket }) => {
  let text = 'I am javascript lover';
  if (addEmoji) {
    text = addEmoji(text, '😍');
  }
  if (addBracket) {
    text = addBracket(text);
  }
  return <div>{text}</div>;
};

export default Text;
