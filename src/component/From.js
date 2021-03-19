import React from 'react';

class From extends React.Component {
  state = {
    title: 'javascript',
    textArea: 'JavaScript',
    library: 'React',
    isActive: true,
  };

  handelClick = (e) => {
    // console.log(e.target.value);
    if (e.target.type === 'text') {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === 'textarea') {
      this.setState({
        textArea: e.target.value,
      });
    } else if (e.target.type === 'select-one') {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === 'checkbox') {
      this.setState({
        isActive: e.target.checked,
      });
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { title, textArea, library, isActive } = this.state;
    console.log(title, textArea, library, isActive);
  };

  render() {
    const { title, textArea, library, isActive } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" placeholder="Enter Title" value={title} onChange={this.handelClick} />
          <br />
          <br />
          <textarea name="text" value={textArea} onChange={this.handelClick} />
          <br />
          <br />
          <select value={library} onChange={this.handelClick}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <br />
          <input type="checkbox" checked={isActive} onChange={this.handelClick} />
          <br />
          <br />

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default From;
