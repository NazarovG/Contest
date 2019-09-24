import React from 'react';
import getDisplayName from '../utilities/getDisplayName';

const withEither = (conditionFn, EitherComp) => Comp => {
  return function WithEither(props) {
    WithEither.displayName = `WithEither(${getDisplayName(Comp)})`;
    return conditionFn(props) ? <EitherComp {...props} /> : <Comp {...props} />;
  };
};
export default withEither;
