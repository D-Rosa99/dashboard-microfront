import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import Mount from "Auth/AuthApp";

const AuthApp = () => {
  const history = useHistory();
  const myRef = useRef(null);

  useEffect(() => {
    const { onParentNavigate } = Mount(myRef.current, {
      initialPath: history.location.pathname,
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

export default AuthApp;
