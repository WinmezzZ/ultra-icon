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

const PointIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M19 41C13.5 38.25 8.001 30 5 25c-3-5 3.313-9.688 7-6l4 4V7.5a3.5 3.5 0 1 1 7 0V16a3.5 3.5 0 1 1 7 0v1.5a3.5 3.5 0 0 1 7-.002V22.5a3.5 3.5 0 0 1 7 0v8.744c0 1.155-.262 2.3-.913 3.254C41.917 36.212 39.602 39.035 36 41c-5.5 3-11.5 2.75-17 0Z"
        />
      </svg>
    </span>
  );
};

PointIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PointIcon;
