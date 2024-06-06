

export default function UserInput({onChange}) {
    return (
      <div id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="">Initial Investment</label>
            <input type="number" required onChange={(e)=>onChange(e.target.value , "initialInvestment")} />
          </p>
  
          <p>
            <label htmlFor="">Annual Investment</label>
            <input type="number" required onChange={(e)=>onChange(e.target.value , "annualInvestment" )} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="">Expected Return</label>
            <input type="number" required onChange={(e)=>onChange(e.target.value , "expectedReturn")}/>
          </p>
  
          <p>
            <label htmlFor="">Duration</label>
            <input type="number" required onChange={(e)=>onChange(e.target.value , "duration")}/>
          </p>
        </div>
      </div>
    );
  }
