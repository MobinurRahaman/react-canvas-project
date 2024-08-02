import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
export default function Circle({ x, y, radius, color }) {
  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef.current) {
      console.log(circleRef.current.style.left);
    }
  }, [circleRef]);

  return (
    <div
      ref={circleRef}
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: radius,
        height: radius,
        borderRadius: "50%",
        backgroundColor: color,
        zIndex: 1,
      }}
    ></div>
  );
}

Circle.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
