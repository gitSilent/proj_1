import { useEffect, useState } from "react";
import "./loaderStyles.css";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const radius = 50;
  const circleLength = 2 * 3.141592 * radius;

  useEffect(() => {
    const interval = setInterval(() => {

      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval); // остановка интервала
          return 100;
        } else {
          return prevProgress + 1;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={`loading-screen ${progress === 100 ? "slide-up" : ""}`}>
      <div className="loading-progress">
        <svg width="200" height="200">
          <g transform="rotate(-90, 100, 100)">
            <circle
              id="circle"
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="#424242"
              stroke-width="10"
              stroke-dasharray={`${circleLength}`}
            >
            </circle>
            <circle
              id="circle"
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="#00BA61"
              stroke-width="10"
              stroke-dasharray={`${circleLength}`}
              stroke-dashoffset={`${
                (circleLength / 100) * 100 - (circleLength / 100) * progress
              }`}
            >
              <text
                x="50%" // расположение по горизонтали в середине круга
                y="50%" // расположение по вертикали в середине круга
                dominantBaseline="middle" // выравнивание текста по вертикали
                textAnchor="middle" // выравнивание текста по горизонтали
                fill="#fff" // цвет текста белый
              >
                Ваш текст
              </text>
            </circle>
          </g>
        </svg>
        <div className="progress-text">{progress}%</div>
      </div>
    </div>
  );
}
