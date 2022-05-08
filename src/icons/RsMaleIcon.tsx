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
const RsMaleIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4.31 16.27A2 2 0 0 1 6.29 14h35.42a2 2 0 0 1 1.981 2.27l-2.454 18A2 2 0 0 1 39.254 36H8.746a2 2 0 0 1-1.982-1.73l-2.454-18Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19 22h2m2 6h2m-14-6h2m2 6h2m10-6h2m2 6h2m2-6h2"
      />
    </svg>
  );
};

RsMaleIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RsMaleIcon = withWrapper(RsMaleIconComponent);
export default RsMaleIcon;
