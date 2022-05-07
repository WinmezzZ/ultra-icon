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

const EqualizerIcon = (p: SVGComponentProps) => {
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
          d="M11 16v26m13-13v13m0-23V6m13 0v26"
        />
        <path
          fill="#2F88FF"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M11 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm13 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm13 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        />
      </svg>
    </span>
  );
};

EqualizerIcon.propTypes = {
  size: PropTypes.number,
};
export default EqualizerIcon;
