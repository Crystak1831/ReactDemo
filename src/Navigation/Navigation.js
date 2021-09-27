import React from "react";
import "./styles.css";
import data1 from "/public/data1.json";
import data from "/public/data.json";
export default class App extends React.Component {
  state = {
    navItem: [],
    subItem: []
  };

  componentDidMount() {
    let tempData = JSON.parse(JSON.stringify(data1));
    let temp = [...this.state.navItem, ...tempData.content];
    this.setState({
      navItem: temp
    });
  }

  fetchDetail = (id) => {
    // use fetch operation here, it should be find

    let tempData = JSON.parse(JSON.stringify(data));
    let temp = [...tempData.content];
    let sub = temp.filter((item) => item.id === id);
    this.setState({
      subItem: sub
    });
  };

  render() {
    return (
      <div className="App">
        <header>Navigation</header>
        <section className="nav-item">
          {this.state.navItem &&
            this.state.navItem.map((item) => (
              <div
                className="card"
                key={item.id}
                onClick={() => this.fetchDetail(item.id)}
              >
                {item.content.map((el) => (
                  <div key={el.id} style={el.styles}>
                    {el.text}
                  </div>
                ))}
              </div>
            ))}
        </section>
        <section className="card detail-card">
          <div>
            {this.state.subItem.map((item) => (
              <div>
                {item.title}-{item.body}
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}
