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

const SwitchButtonIcon = (p: SVGComponentProps) => {
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
        <rect
          width={40}
          height={16}
          x={4}
          y={4}
          fill="#2F88FF"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={8}
        />
        <rect
          width={40}
          height={16}
          x={4}
          y={28}
          fill="#2F88FF"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={8}
        />
        <path
          fill="#43CCF8"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M36 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 38a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </span>
  );
};

SwitchButtonIcon.propTypes = {
  size: PropTypes.number,
};
export default SwitchButtonIcon;
