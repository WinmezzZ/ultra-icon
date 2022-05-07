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

const PeasIcon = (p: SVGComponentProps) => {
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
        <g clipPath="url(#prefix__a)">
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M27 12s7 7 7 16-4.445 16.223-8 16c-3.556-.223-7-7-6-16s7-16 7-16Zm0 0s1-4.125 4-6.062C34 4 39.89 9 39 12c-.89 3-4 3-5 0s4-6.5 7-6.062c3 .437 3.257 5.242 3 8.062-.501 5.5-2 10-2 10"
          />
          <path
            fill="null"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M27 12s0 8-7 16-13.675 9.7-16 7c-2.325-2.7 0-10 7-17s16-6 16-6Z"
          />
          <circle cx={27.243} cy={27.408} r={2.5} fill="#000" />
          <circle cx={26.243} cy={34.408} r={2.5} fill="#000" />
        </g>
        <defs>
          <clipPath id="prefix__a">
            <path fill="#fff" d="M0 0h48v48H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

PeasIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PeasIcon;
