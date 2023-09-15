import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import Mount from "Marketing/MarketingApp";

const MarketingApp = () => {
  const history = useHistory();
  const myRef = useRef(null);

  useEffect(() => {
    const { onParentNavigate } = Mount(myRef.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={myRef}></div>;
};

export default MarketingApp;
