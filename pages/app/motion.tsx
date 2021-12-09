import { motion } from "framer-motion";
import { useState } from "react";

const Motion = () => {
  const [point, setPoint] = useState(false);
  function onTap(event, info) {
    console.log(info.point.x, info.point.y);

    if (info.point.x >= 1000) {
      console.log("reached point");
      setPoint(true);
    }
  }

  return (
    <div className="bg-black h-full  p-20 ">
      <h1>ok</h1>
    </div>
  );
};

export default Motion;
