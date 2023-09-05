import React, { useEffect, useRef } from "react";
import Mount from "Marketing/MarketingApp";

const MarketingApp = () => {
  const myRef = useRef(null);

  useEffect(() => {
    Mount(myRef.current);
  }, []);

  return <div ref={myRef}></div>;
};

export default MarketingApp;
