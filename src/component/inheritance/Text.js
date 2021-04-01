import Emoji from './Emoji';

export default class Text extends Emoji {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const decerotedText = this.addEmoji('i am javascript lover', '😍');

    return super.render(decerotedText);
  }
}
