import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const CounterComponent = ({ counter, dispatch }) => (
    <div>
    <div className="flexContainer">
    <p>{counter}</p>
    </div>
    <div className="flexContainer">
    <button className="positivButtons"
      onClick={() => dispatch({ type: 'ADD' })}
    >
      + 1
    </button>
    <button className="negativButtons"
      onClick={() => dispatch({ type: 'REMOVE' })}
    >
      - 1
    </button>
    <button className="positivButtons"
      onClick={() => dispatch({ type: 'ADDTEN' })}
    >
      + 10
    </button>
    <button className="negativButtons"
      onClick={() => dispatch({ type: 'REMOVETEN' })}
    >
      - 10
    </button>
    <button className="reset"
      onClick={() => dispatch({ type: 'RESET' })}
    >
      RESET 😭
    </button>
  </div>
  </div>
);

export default connect(
  mapStateToProps
)(CounterComponent);
