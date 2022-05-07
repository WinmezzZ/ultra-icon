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

const DownloadOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M11.678 20.271C7.275 21.318 4 25.277 4 30c0 5.523 4.477 10 10 10v0c.947 0 1.864-.132 2.733-.378m19.322-19.351c4.403 1.047 7.677 5.006 7.677 9.729 0 5.523-4.477 10-10 10v0c-.947 0-1.864-.132-2.732-.378M36 20c0-6.627-5.373-12-12-12s-12 5.373-12 12m5.065 10.119L24 37.076 31.132 30M24 20v13.538"
        />
      </svg>
    </span>
  );
};

DownloadOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DownloadOneIcon;
