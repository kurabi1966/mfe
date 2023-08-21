import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount as mountMarketing } from 'marketing/MarketingApp';

export default () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const initialPath = history.location.pathname;
    const { onParentNavigate } = mountMarketing(ref.current, {
      initialPath,
      onNavigate: ({ pathname: nextPathname }) => {
        console.log('Container.MarketingApp: OnNavigate', nextPathname);
        const { pathname } = history.location;
        pathname !== nextPathname ? history.push(nextPathname) : null;
      },
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
};
