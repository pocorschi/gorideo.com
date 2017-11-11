import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      name: this.props.name,
      value: '',
    };
    this.onChange = this.onChange.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  onChange(e) {
    let value = e.target.value;
    if (this.validateField(value)) {
      this.setState(
        {
          value: value,
          error: null,
        },
        () => {
          this.props.onChange(this.state);
        }
      );
    } else {
      this.setState(
        {
          value: value,
          error: true,
        },
        () => {
          this.props.onChange(this.state);
        }
      );
    }
  }

  validateField(value) {
    return true;
  }

  render() {
    return (
      <input
        className={this.props.className}
        placeholder={this.props.placeholder}
        autoComplete={this.props.autoComplete ? this.props.autoComplete : 'on'}
        type={this.props.type ? this.props.type : 'text'}
        name={this.props.name}
        pattern={this.props.pattern ? this.props.pattern : ''}
        title={this.props.title ? this.props.title : ''}
        style={this.props.style}
        required={this.props.required ? true : false}
        onChange={this.onChange}
        value={this.state.value}
      />
    );
  }
}

export default Input;
