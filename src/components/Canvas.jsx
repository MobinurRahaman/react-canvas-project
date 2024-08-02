import { useRef, useState } from "react";
import styles from "../styles/Canvas.module.css";
import Circle from "./Circle";

export default function Canvas() {
  const [circleData, setCircleData] = useState([]);
  const canvasRef = useRef(null);

  const handleMoueClick = (e) => {
    console.log("clientX", e.clientX - 50 / 2);
    console.log("clientY", e.clientY - 50 / 2);
    setCircleData([
      ...circleData,
      { x: e.clientX, y: e.clientY, radius: 50, color: "rgb(255, 0,0)" },
    ]);
    checkOverlap(e.clientX, e.clientX, 50);
  };

  const test = () => {
    // const positions = circleData.map((item) => [{ x: item.x, y: item.y }]);
    // console.log(positions);
    // circleData.filter((item, index) => item.x + )
  };

  // start x: x: e.clientX + radius
  // end x: x: e.clientX + radius
  // start y: y: e.clientX + radius
  // end y: y: e.clientX + radius

  const checkOverlap = (curentCircleX, curentCircleY, curentCircleRadius) => {
    const circleDataLen = circleData.length;

    for (let i = 0; i < circleDataLen - 1; i++) {
      if (circleData.x >= curentCircleX || circleData.y >= curentCircleY) {
        alert("overlapped");
      }
    }
  };

  test();

  return (
    <div ref={canvasRef} className={styles.canvas} onClick={handleMoueClick}>
      {circleData.map((circleItem, circleIndex) => (
        <Circle
          x={circleItem.x}
          y={circleItem.y}
          radius={circleItem.radius}
          color={`${circleItem.color}`}
          key={circleIndex}
        />
      ))}
    </div>
  );
}
