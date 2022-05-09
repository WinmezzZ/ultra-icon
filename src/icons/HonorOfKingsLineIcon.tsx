/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const HonorOfKingsLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m18.328 4.256-1.423 1.423a8.002 8.002 0 0 0-12.272 9.444l2.417-2.417a5.002 5.002 0 0 1 7.707-4.878l-1.464 1.464a3 3 0 0 0-4.001 4.001l-6.45 6.45c-.034-3.5-.591-4.812-.788-6.702a9.98 9.98 0 0 1 2.875-8.112c3.666-3.666 9.471-3.89 13.4-.673zm2.83.002c.034 3.5.591 4.811.788 6.701a9.98 9.98 0 0 1-2.875 8.112c-3.666 3.666-9.471 3.89-13.4.673l1.424-1.423a8.002 8.002 0 0 0 12.272-9.444l-2.417 2.417a5.002 5.002 0 0 1-7.707 4.878l1.464-1.464a3 3 0 0 0 4.001-4.001l6.45-6.45z" />
    </svg>
  );
};

HonorOfKingsLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HonorOfKingsLineIcon = withWrapper(HonorOfKingsLineIconComponent);
export default HonorOfKingsLineIcon;
