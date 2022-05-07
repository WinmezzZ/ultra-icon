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

const RidingOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M12.58 27.514 4 28.319v-5.638l12.258-5.237V10s5.72 1.403 6.537 2.611c.817 1.208 0 4.028 0 4.028 4.086 1.477 7.99 6.042 7.99 9.667S29 34.5 29 34.5c-1.98 0-2.71 4.292-1.484 5.5"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M22 26c0 2.761-1.79 4-4 4s-4-1.239-4-4m3.38 4c.439 0 .877 3.2.439 4.8-.438 1.6-.877 2.4-4.819 5.2"
        />
        <path stroke="#000" strokeMiterlimit={2} strokeWidth={4} d="M37 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="M27 30c2.435.084 6.11-1.773 8-3.066 2.272-1.56.135-4.011 2.724-4.556L39.55 21S41 23.066 42 25c1 1.934 1.6 7.9 0 11.5h-8l3 3"
        />
      </svg>
    </span>
  );
};

RidingOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default RidingOneIcon;
