import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class SearchBar extends React.Component {
  onInputChange(term) {
    this.props.onTermChange(term);
  }
  handleChange(event) {
    this.props.actions.updateForm({ number: event.target.value });
  }
  render() {
    return (
      <div className="search">
        <input
          placeholder="Enter text to search for gifs!"
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    number: state.number
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
