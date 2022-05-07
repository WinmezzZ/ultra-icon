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

const MascaraIcon = (p: SVGComponentProps) => {
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
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M28 16h12v28H28z" />
        <path
          fill="#2F88FF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M8 28h12v16H8z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 4v24" />
        <path stroke="#fff" strokeLinecap="round" strokeWidth={4} d="M20 36H8" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M20 32v8M8 32v8M18 9h-8m10 6H8m10 6h-8"
        />
      </svg>
    </span>
  );
};

MascaraIcon.propTypes = {
  size: PropTypes.number,
};
export default MascaraIcon;
