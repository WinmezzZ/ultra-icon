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

const SixPointsIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m24 24-10.5 6.062M24 24l10.5 6.062M24 24V12"
        />
        <path
          fill="#2F88FF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M14 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm14 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm14-8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0-16a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM28 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        />
      </svg>
    </span>
  );
};

SixPointsIcon.propTypes = {
  size: PropTypes.number,
};
export default SixPointsIcon;
