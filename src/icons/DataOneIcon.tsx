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

const DataOneIcon = (p: SVGComponentProps) => {
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
        <ellipse
          cx={24}
          cy={11}
          fill="#2F88FF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={20}
          ry={6}
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10.77 15.5C6.62 16.6 4 18.208 4 20c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10.77 24.5C6.62 25.6 4 27.208 4 29c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10.77 33.5C6.62 34.6 4 36.208 4 38c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.792-2.619-3.4-6.77-4.5"
        />
      </svg>
    </span>
  );
};

DataOneIcon.propTypes = {
  size: PropTypes.number,
};
export default DataOneIcon;