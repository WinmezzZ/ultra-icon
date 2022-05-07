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

const NewlybuildIcon = (p: SVGComponentProps) => {
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
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M19 10V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2h-4"
        />
        <rect
          width={24}
          height={24}
          x={5}
          y={18}
          fill="#2F88FF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={2}
        />
        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 25v10m-5-5h10" />
      </svg>
    </span>
  );
};

NewlybuildIcon.propTypes = {
  size: PropTypes.number,
};
export default NewlybuildIcon;
