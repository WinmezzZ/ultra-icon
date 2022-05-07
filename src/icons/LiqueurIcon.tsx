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

const LiqueurIcon = (p: SVGComponentProps) => {
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
          d="M23 31 7.41 13h31.177L23 31Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M23 32v10" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M17 44h12" />
        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 23h14" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M35 18h3a6 6 0 1 0-5.917-5M11 17.144 19.536 27M35 17.143l-8.79 10.15"
        />
      </svg>
    </span>
  );
};

LiqueurIcon.propTypes = {
  size: PropTypes.number,
};
export default LiqueurIcon;
