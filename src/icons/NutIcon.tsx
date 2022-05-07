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

const NutIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M37.699 6c-.527.534-2.46 2.672-3.69 3.741-.175.535 2.109 2.672 2.636 3.207.527.534 6.85-3.207 6.324-3.741-.422-.428-3.69-2.316-5.27-3.207Z"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M11.372 16.722a5.74 5.74 0 0 1-.03-.263 19.59 19.59 0 0 0-4.3 6.141 3.515 3.515 0 1 1-1.506 6.866c-.02 3.546 1.15 6.955 3.58 9.601 3.505 3.815 8.81 5.151 14.03 4.065 3.214-.67 6.395-2.255 9.106-4.746a19.996 19.996 0 0 0 3.39-4.051c-2.225.67-4.675-.412-5.601-2.598a3.683 3.683 0 0 0-2.577-2.155l-1.682-.381a5.972 5.972 0 0 1-4.24-3.65l-.091-.23a5.583 5.583 0 0 0-4.857-3.54 5.583 5.583 0 0 1-5.19-4.826l-.032-.233Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m13.154 11.658-.251.27a5.87 5.87 0 0 0-1.53 4.794l.03.233a5.583 5.583 0 0 0 5.191 4.826 5.583 5.583 0 0 1 4.857 3.54l.09.23a5.973 5.973 0 0 0 4.241 3.65l1.683.381a3.684 3.684 0 0 1 2.576 2.155c.996 2.35 3.755 3.425 6.1 2.416 2.368-1.019 4.084-3.199 4.483-5.746l.207-1.33a9.933 9.933 0 0 0 .1-2.166l-.108-1.69a17.275 17.275 0 0 0-3.504-9.38l-.252-.331a15.79 15.79 0 0 0-14.1-6.138l-1.406.138a13.293 13.293 0 0 0-8.407 4.148Z"
        />
      </svg>
    </span>
  );
};

NutIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default NutIcon;
