/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const OpenSourceLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2c5.523 0 10 4.477 10 10 0 4.4-2.841 8.136-6.789 9.473l-.226.074-2.904-7.55A2.016 2.016 0 0 0 14 12a2 2 0 1 0-2.083 1.998l-2.903 7.549-.225-.074A10.001 10.001 0 0 1 2 12C2 6.477 6.477 2 12 2zm0 2a8 8 0 0 0-4.099 14.872l1.48-3.849A3.999 3.999 0 0 1 12 8a3.999 3.999 0 0 1 2.62 7.023c.565 1.474 1.059 2.757 1.479 3.85A8 8 0 0 0 12 4z" />
    </svg>
  );
};

OpenSourceLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const OpenSourceLineIcon = withWrapper(OpenSourceLineIconComponent);
export default OpenSourceLineIcon;
