import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class Form extends React.Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.datails) errors[item.path[0]] = item.message;

    return errors;
  };

  validateProperty = (name, value) => {
    //We use computed property [], so whatever it is at run time will be set.
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    //to pick the error property {}
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    //prevent submission of form
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  /*
  The job of helper methods like renderSelect
  is to return the right component (Select)
  and hook into the onChange event.
  Without these helper methods 
  we have to manually set onChange everytime.
  */
  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, type = "text") {
    const { data, error } = this.state;

    return (
      <Input
        type={type}
        name="name"
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={error[name]}
      />
    );
  }
}

export default Form;
