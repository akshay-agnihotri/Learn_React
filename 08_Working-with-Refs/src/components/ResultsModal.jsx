import {useRef, forwardRef , useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime ,timeRemaining },
  ref
) {
    const myRef = useRef();
    useImperativeHandle(ref,()=> (
        {open:()=>{
            myRef.current.showModal();
        }}
    ))
  return (
    <dialog className="result-modal" ref={myRef}>
      <h2>{result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{(timeRemaining<0 || result==='You Lost') ? 0:timeRemaining/1000} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;
