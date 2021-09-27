import React from "react";
// import "./imgComponent.css";

export default class ImgComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      img: [],
      index: 0
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/photos/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          list: data.slice(0, 3)
          // index:0
          // img:data.thumbnailUrl
        });
      });
  }

  handleLeftBtn = () => {
    if (this.state.index === 0) {
      this.setState({
        index: 2
      });
    } else {
      this.setState({
        index: this.state.index - 1
      });
    }
  };

  handleRightBtn = () => {
    if (this.state.index === 2) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({
        index: this.state.index + 1
      });
    }
  };

  render() {
    const { list, index } = this.state;
    console.log(list, index);
    // if (list.length) {
    return (
      <div>
        <button className="leftBtn" onClick={this.handleLeftBtn}>
          left
        </button>
        <button className="rightBtn" onClick={this.handleRightBtn}>
          right
        </button>
        <div>{list.length && <img src={list[index].thumbnailUrl} />}</div>
      </div>
    );
  }
  // }
}
