/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const defaultProps = {
  size: 24,
};

const FiveStarBadgeIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
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
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M23.103 20.817a1 1 0 0 1 1.794 0l2.985 6.048a1 1 0 0 0 .753.548l6.675.97a1 1 0 0 1 .554 1.705l-4.83 4.708a1 1 0 0 0-.288.885l1.14 6.648a1 1 0 0 1-1.45 1.054l-5.97-3.138a1 1 0 0 0-.931 0l-5.97 3.138a1 1 0 0 1-1.452-1.054l1.14-6.648a1 1 0 0 0-.287-.885l-4.83-4.708a1 1 0 0 1 .554-1.706l6.675-.97a1 1 0 0 0 .753-.547l2.985-6.048ZM36 4H12v10l12 5 12-5V4Z"
        />
      </svg>
    </span>
  );
};

FiveStarBadgeIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FiveStarBadgeIcon;
