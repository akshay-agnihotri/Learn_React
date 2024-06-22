import { useEffect, useState } from "react";

function ProgressBar() {
  const [progressBarValue, setProgressBarValue] = useState(3000);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBarValue((prevProgressBarValue) => prevProgressBarValue - 10);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return <progress value={progressBarValue} max="3000"></progress>;
}

export default ProgressBar;
