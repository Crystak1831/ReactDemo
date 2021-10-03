import React from "react";

export default class EnterUserDetail extends React.Component {
  state = {
    page: 1,
    firstName: "",
    lastName: "",
    city: "",
    bio: "",
    ferror: false,
    lerror: false,
    cerror: false,
    berror: false
  };
  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
      ferror: false
    });
  };
  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
      lerror: false
    });
  };
  handleCity = (e) => {
    this.setState({
      city: e.target.value
    });
  };
  handleBio = (e) => {
    this.setState({
      bio: e.target.value
    });
  };
  get gotoSeperatePage() {
    if (this.state.page === 1) {
      return (
        <div className="flex">
          <label>
            First Name:
            <input
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
              className="flex-item"
              placeholder="Enter First Name"
            />
          </label>
          {this.state.ferror ? <p>First Name is required</p> : ""}
          <label>
            Last Name:
            <input
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
              className="flex-item"
              placeholder="Enter Last Name"
            />
          </label>
          {this.state.lerror ? <p>Last Name is required</p> : ""}
        </div>
      );
    } else if (this.state.page === 2) {
      return (
        <div className="flex">
          <label>
            City:
            <input
              value={this.state.city}
              onChange={this.handleCity}
              className="flex-item"
              placeholder="Enter City"
            />
          </label>
          <label>
            Bio:
            <input
              value={this.state.bio}
              onChange={this.handleBio}
              className="flex-item"
              placeholder="Enter Bio"
            />
          </label>
        </div>
      );
    } else {
      return (
        <div className="confirm">
          <div className="confirm-item">First Name: {this.state.firstName}</div>
          <div className="confirm-item">Last Name: {this.state.lastName}</div>
          <div className="confirm-item">City: {this.state.city}</div>
          <div className="confirm-item">Bio: {this.state.bio}</div>
        </div>
      );
    }
  }
  get renderButton() {
    if (this.state.page === 1) {
      return (
        <div className="button-container">
          <button onClick={this.handleNext}>Next</button>
        </div>
      );
    } else {
      return (
        <div className="button-container">
          <button onClick={this.handleNext}>Next</button>
          <button onClick={this.handleBack}>back</button>
        </div>
      );
    }
  }
  handleNext = () => {
    if (!this.state.firstName) {
      this.setState({
        ferror: true
      });
    } else {
      this.setState({
        ferror: false
      });
    }
    if (!this.state.lastName) {
      this.setState({
        lerror: true
      });
    } else {
      this.setState({
        lerror: false
      });
    }
    if (this.state.page === 3) {
      return;
    } else {
      if (this.state.page === 1) {
        if (!this.state.firstName || !this.state.lastName) {
          return;
        } else {
          this.setState({
            page: this.state.page + 1
          });
        }
      } else {
        if (!this.state.city || !this.state.bio) {
          return;
        } else {
          this.setState({
            page: this.state.page + 1
          });
        }
      }
    }
  };
  handleBack = () => {
    if (this.state.page === 1) {
      return;
    } else {
      this.setState({
        page: this.state.page - 1
      });
    }
  };
  render() {
    return (
      <div className="form-container">
        <header className="form-container__header">Enter User Detail</header>
        {this.gotoSeperatePage}
        {this.renderButton}
      </div>
    );
  }
}
