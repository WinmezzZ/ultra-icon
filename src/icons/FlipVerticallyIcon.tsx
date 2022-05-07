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

const FlipVerticallyIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M42 24H6" />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m14 4 22 12H14V4Zm0 40V32h22L14 44Z"
        />
      </svg>
    </span>
  );
};

FlipVerticallyIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FlipVerticallyIcon;
