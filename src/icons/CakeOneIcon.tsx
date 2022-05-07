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

const CakeOneIcon = (p: SVGComponentProps) => {
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
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M27 14 9 21.9h30L34 15" />
        <circle cx={31} cy={13} r={4} fill="#fff" stroke="#000" strokeWidth={4} />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m33 9 2-5" />
        <path
          stroke="#000"
          strokeWidth={4}
          d="M9.5 26.957c-.602.3-1.162.62-1.678.956C5.418 29.481 4 31.412 4 33.5c0 5.247 8.954 9.5 20 9.5s20-4.253 20-9.5c0-2.14-1.488-4.113-4-5.7"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M9 22h30v12H9z"
        />
        <path stroke="#000" strokeWidth={4} d="M9 22h31" />
      </svg>
    </span>
  );
};

CakeOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CakeOneIcon;
