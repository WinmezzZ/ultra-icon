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

const MaslowPyramidsIcon = (p: SVGComponentProps) => {
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
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <path
            fill="null"
            fillRule="evenodd"
            stroke="#000"
            strokeLinejoin="round"
            strokeWidth={4}
            d="m24 4-9 15.98h18L24 4Z"
            clipRule="evenodd"
          />
          <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 19.98 24.008 44" />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M11.347 25.975 2 42h15.005"
          />
          <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M9.1 30.995h7.905" />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M36.748 25.975 46.095 42H31"
          />
          <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M39.095 30.995H31.1" />
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

MaslowPyramidsIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MaslowPyramidsIcon;
