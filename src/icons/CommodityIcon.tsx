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

const CommodityIcon = (p: SVGComponentProps) => {
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
          d="M9.781 9.752A2 2 0 0 1 11.766 8h24.468a2 2 0 0 1 1.985 1.752l3.5 28A2 2 0 0 1 39.734 40H8.266a2 2 0 0 1-1.985-2.248l3.5-28Z"
        />
        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 18s2 4 9 4 9-4 9-4" />
      </svg>
    </span>
  );
};

CommodityIcon.propTypes = {
  size: PropTypes.number,
};
export default CommodityIcon;