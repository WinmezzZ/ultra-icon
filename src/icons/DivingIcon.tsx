/**
 * These code auto generated by UltraIcon
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const defaultProps = {
  size: 24,
};

const DivingIcon = (p: SVGComponentProps) => {
  const { size, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path
          fill="#2F88FF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M31.8 6H10.2C7.88 6 6 7.79 6 10v8h11c0-2 1.5-4 4-4s4 2 4 4h11v-8c0-2.21-1.88-4-4.2-4Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M16 24c0 1.491 1.25 6 5 6s5-4.509 5-6M42 6v32c0 4-3 6-6 6s-6-2-6-6v-2"
        />
      </svg>
    </span>
  );
};

DivingIcon.propTypes = {
  size: PropTypes.number,
};
export default DivingIcon;
