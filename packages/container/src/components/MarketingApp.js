import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { mount as mountMarketing } from "marketing/MarketingApp";

export default () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const initialContainerPath = history.location.pathname;
    const { onParentNavigate } = mountMarketing(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        console.log("Container.MarketingApp: OnNavigate", nextPathname);
        const { pathname } = history.location;
        pathname !== nextPathname ? history.push(nextPathname) : null;
      },
      initialPath: initialContainerPath === "/pricing" ? "/pricing" : "",
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
};
