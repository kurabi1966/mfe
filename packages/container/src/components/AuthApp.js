import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount as mountAuth } from "auth/AuthApp";

export default () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const initialContainerPath = history.location.pathname;
    const { onParentNavigate } = mountAuth(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        console.log("Container.AuthApp: OnNavigate", nextPathname);
        const { pathname } = history.location;
        pathname !== nextPathname ? history.push(nextPathname) : null;
      },
      initialPath:
        initialContainerPath === "/auth/signup"
          ? "/auth/signup"
          : "/auth/signin",
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
};
