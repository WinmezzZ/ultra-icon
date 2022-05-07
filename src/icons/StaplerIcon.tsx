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

const StaplerIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M42 35v8H6v-8h25m7.384-13.194L8.314 10.862l-2.736 7.517 24.175 8.8M8.37 10.778l14.512 5.38a.03.03 0 0 0 .04-.018v0a5.285 5.285 0 0 0-3.119-6.792l-9.502-3.523a.09.09 0 0 0-.115.053l-1.816 4.9Zm8.385 11.942-1.368 3.759a1 1 0 0 1-1.282.597l-6.578-2.394a1 1 0 0 1-.598-1.281l1.368-3.76"
        />
        <circle cx={36} cy={30} r={7} fill="null" stroke="#000" strokeWidth={4} />
      </svg>
    </span>
  );
};

StaplerIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default StaplerIcon;
