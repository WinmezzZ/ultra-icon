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

const SunOneIcon = (p: SVGComponentProps) => {
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
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 37c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13Z"
        />
        <path
          fill="#000"
          d="M24 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm14.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm6 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-6 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM24 47a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM9.5 41a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-6-14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm6-14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        />
      </svg>
    </span>
  );
};

SunOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SunOneIcon;
