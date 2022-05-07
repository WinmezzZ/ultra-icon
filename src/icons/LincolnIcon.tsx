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

const LincolnIcon = (p: SVGComponentProps) => {
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
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="M30.19 4H17.81a2 2 0 0 0-1.99 1.801l-1.8 18a2.005 2.005 0 0 0 0 .398l1.8 18A2 2 0 0 0 17.81 44h12.38a2 2 0 0 0 1.99-1.801l1.8-18a2.005 2.005 0 0 0 0-.398l-1.8-18A2 2 0 0 0 30.19 4Z"
        />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M14 24h20M24 4v40" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M20 4h8m-8 40h8M15 14l-.98 9.801a2.005 2.005 0 0 0 0 .398L15 34m18-20 .98 9.801c.013.132.013.266 0 .398L33 34"
        />
      </svg>
    </span>
  );
};

LincolnIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default LincolnIcon;
