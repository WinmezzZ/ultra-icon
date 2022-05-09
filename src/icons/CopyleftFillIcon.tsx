/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const CopyleftFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-5c2.76 0 5-2.24 5-5a5.002 5.002 0 0 0-9.288-2.572l1.715 1.028A2.997 2.997 0 0 1 12 9c1.658 0 3 1.342 3 3s-1.342 3-3 3a2.998 2.998 0 0 1-2.574-1.457l-1.714 1.03A5.001 5.001 0 0 0 12 17z" />
    </svg>
  );
};

CopyleftFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CopyleftFillIcon = withWrapper(CopyleftFillIconComponent);
export default CopyleftFillIcon;
