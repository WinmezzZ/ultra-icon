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
const InFlightIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M12 40c0-7.18 5.373-13 12-13s12 5.82 12 13" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M13 37c0 1 2.5 2 4 1s1.96-3.505 3.5-3.074C22.04 35.357 22 38.5 24 40s5.5 1 7-1.5-.08-3.175 1.061-4.797c.76-1.081 1.73-.816 1.939-.703"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M23 21h2m7.151 1.47 1.696 1.06m-19.696 0 1.697-1.06m23.211 5.664 1 1.732m-32 0 1-1.732m32.836 8.872.209 1.989m-37.209 0 .209-1.99"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M42 10 9 18" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m16 7 13 6-12 3-5-7 4-2Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m9 18-3-4" />
    </svg>
  );
};

InFlightIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const InFlightIcon = withWrapper(InFlightIconComponent);
export default InFlightIcon;
