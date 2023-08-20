import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { mount as mountMarketing } from "marketing/MarketingApp";

export default () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mountMarketing(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        pathname !== nextPathname ? history.push(nextPathname) : null;
      },
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
};
