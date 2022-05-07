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

const HandUpIcon = (p: SVGComponentProps) => {
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
        <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M41 38H19v6h22v-6Z" />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M19 38C12.481 30.877 8.74 26.75 7.778 25.616c-1.443-1.7-.837-3.62 2.775-3.62s5.695 5.286 8.447 5.286c.017.003.018-6.756.003-20.278A3 3 0 0 1 22.001 4h.003a3.004 3.004 0 0 1 3.005 3.004v8.01c7.972 1.209 12.307 1.876 13.003 2C39.057 17.203 41 18.2 41 21.069V38H19Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

HandUpIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HandUpIcon;
