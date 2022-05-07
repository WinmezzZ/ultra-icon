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

const ConnectionArrowIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
        <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g stroke="#000" strokeWidth={4}>
            <path d="M40.99 8.026H12.182C9.455 8.026 4 9.551 4 15.967 4 22.384 9.455 24 12.182 24h23.812C38.72 24 44 25.568 44 31.985c0 6.416-5.279 8.018-8.006 8.018H6.065" />
            <path d="m8.046 35.993-3.979 4.066L8.046 44M38.043 3.954 42.02 8.02l-3.978 3.941" />
          </g>
        </g>
      </svg>
    </span>
  );
};

ConnectionArrowIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ConnectionArrowIcon;
