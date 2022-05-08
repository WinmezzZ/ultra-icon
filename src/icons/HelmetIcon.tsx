/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const HelmetIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M42.34 32c1.07-2.45 1.66-5.16 1.66-8 0-11.05-8.95-20-20-20S4 12.95 4 24h20l.01 8c0 3.87 3.13 7 7 7s7-3.13 7-7h4.33Z"
      />
      <path fill="#000" d="M31 34c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M24 32 6 36c2.23 3.17 4.45 6.37 8 8l12-7"
      />
    </svg>
  );
};

HelmetIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HelmetIcon = withWrapper(HelmetIconComponent);
export default HelmetIcon;
