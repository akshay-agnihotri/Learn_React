import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index.js";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter); // Extract the actual counter value
  const show = useSelector((state) => state.counter.showCounter); // Extract the showCounter boolean
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment(1)); //{type:SOME_UNIQUE_IDENTIFIER,payload:1}
  };

  const incrementBy5Handler = () => {
    dispatch(counterActions.increment(5)); //{type:SOME_UNIQUE_IDENTIFIER,payload:5}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement(1)); //{type:SOME_UNIQUE_IDENTIFIER,payload:1}
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementBy5Handler}>Increase By 5</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// import { Component } from "react";
// import { connect } from "react-redux";
// import classes from "./Counter.module.css";

// class Counter extends Component {
//   decrementHandler = () => {
//     this.props.decrement();
//   };

//   incrementHandler = () => {
//     this.props.increment();
//   };

//   toggleCounterHandler = () => {};

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>{" "}
//         <div>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           <button onClick={this.incrementHandler.bind(this)}>
//             Increment
//           </button>{" "}
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>{" "}
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch({ type: "increment" });
//     },
//     decrement: () => {
//       dispatch({ type: "decrement" });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
