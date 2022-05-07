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

const CommuterBagIcon = (p: SVGComponentProps) => {
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
          d="M31.992 22c.005-.308.008-.617.008-.927C32 9.515 28.418 4 24 4s-8 5.515-8 17.073c0 .31.003.62.008.927"
        />
        <rect
          width={22}
          height={22}
          x={13}
          y={22}
          fill="#2F88FF"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={2}
        />
      </svg>
    </span>
  );
};

CommuterBagIcon.propTypes = {
  size: PropTypes.number,
};
export default CommuterBagIcon;
