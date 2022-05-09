/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Dashboard3LineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.833 3.337a.595.595 0 0 1 .763.067.59.59 0 0 1 .063.76c-2.18 3.046-3.38 4.678-3.598 4.897a1.502 1.502 0 0 1-2.122 0 1.502 1.502 0 0 1 0-2.122c.374-.373 2.005-1.574 4.894-3.602zM17.5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-11 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2.318-3.596a1 1 0 1 1-1.416 1.414 1 1 0 0 1 1.416-1.414zM12 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
};

Dashboard3LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Dashboard3LineIcon = withWrapper(Dashboard3LineIconComponent);
export default Dashboard3LineIcon;
