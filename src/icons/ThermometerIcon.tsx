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

const ThermometerIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        {...props}
      >
        <g fill="none" fillRule="evenodd" strokeLinejoin="round">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g strokeWidth={4} transform="translate(14 6)">
            <path
              fill="null"
              fillRule="nonzero"
              stroke="#000"
              d="M4 20V4a6 6 0 1 1 12 0v16a9.985 9.985 0 0 1 4 8c0 5.523-4.477 10-10 10S0 33.523 0 28a9.985 9.985 0 0 1 4-8Z"
            />
            <path stroke="#FFF" strokeLinecap="round" d="M10 11v13" />
            <circle cx={10} cy={28} r={4} fill="null" fillRule="nonzero" stroke="#FFF" />
          </g>
        </g>
      </svg>
    </span>
  );
};

ThermometerIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ThermometerIcon;
