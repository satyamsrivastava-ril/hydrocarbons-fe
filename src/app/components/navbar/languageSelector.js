import React, { Component } from "react";
import { RadioButton } from "primereact/radiobutton";

export class LanguageSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "en",
    };
  }

  handleChange = (event) => {
    // console.log("selected val is ", event.target.value);
    let newlang = event.target.value;
    this.setState((prevState) => ({ language: newlang }));
    // console.log("state value is", newlang);
    this.props.i18n.changeLanguage(newlang);
  };

  render() {
    // this.props.i18n.changeLanguage(this.state.language);
    return (
      <div>
        <h5>Select Language</h5>
        <div className="card" style={{ display: "flex", flexDirection: "row" }}>
          <div className="p-field-radiobutton" style={{ padding: "0 15px" }}>
            <RadioButton
              inputId="1"
              name="language"
              value="en"
              //   onChange={(e) => this.setState({ language: e.value })}
              onChange={this.handleChange}
              checked={this.state.language === "en"}
            />
            <label htmlFor="1">English</label>
          </div>
          <div className="p-field-radiobutton" style={{ padding: "0 15px" }}>
            <RadioButton
              inputId="2"
              name="language"
              value="urdu"
              //   onChange={(e) => this.setState({ language: e.value })}
              onChange={this.handleChange}
              checked={this.state.language === "urdu"}
            />
            <label htmlFor="2">Urdu</label>
          </div>
          <div className="p-field-radiobutton" style={{ padding: "0 15px" }}>
            <RadioButton
              inputId="3"
              name="language"
              value="dutch"
              //   onChange={(e) => this.setState({ language: e.value })}
              onChange={this.handleChange}
              checked={this.state.language === "dutch"}
            />
            <label htmlFor="3">Dutch</label>
          </div>
          <div className="p-field-radiobutton" style={{ padding: "0 15px" }}>
            <RadioButton
              inputId="4"
              name="language"
              value="mandarin"
              //   onChange={(e) => this.setState({ language: e.value })}
              onChange={this.handleChange}
              checked={this.state.language === "mandarin"}
            />
            <label htmlFor="4">Mandarin</label>
          </div>
        </div>
      </div>
    );
  }
}
