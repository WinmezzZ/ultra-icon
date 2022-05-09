/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const HonorOfKingsFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M21.158 4.258c.034 3.5.591 4.811.788 6.701a9.98 9.98 0 0 1-2.875 8.112c-3.666 3.666-9.471 3.89-13.4.673l2.852-2.853a6.002 6.002 0 0 0 8.368-8.368l4.267-4.265zm-2.83-.002-2.851 2.853a6.002 6.002 0 0 0-8.368 8.368l-4.267 4.265c-.034-3.5-.591-4.811-.788-6.701a9.98 9.98 0 0 1 2.875-8.112c3.666-3.666 9.471-3.89 13.4-.673zM12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 12 10.5z" />
    </svg>
  );
};

HonorOfKingsFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HonorOfKingsFillIcon = withWrapper(HonorOfKingsFillIconComponent);
export default HonorOfKingsFillIcon;
