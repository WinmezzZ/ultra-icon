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

const MassageTableIcon = (p: SVGComponentProps) => {
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
          strokeLinejoin="round"
          strokeWidth={4}
          d="M14 17a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v6H14v-6Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M26 23 14 37m18-14 12 14M14 23H6m33 8H19M6 13v10m8 0v17m30-17v17M9 14l-6-2"
        />
      </svg>
    </span>
  );
};

MassageTableIcon.propTypes = {
  size: PropTypes.number,
};
export default MassageTableIcon;