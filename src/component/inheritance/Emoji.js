import React from 'react';

export default class Emoji extends React.Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

  render(ovveride) {
    let text = 'i am the emoji component';

    if (ovveride) text = ovveride;

    return <div>{text}</div>;
  }
}
