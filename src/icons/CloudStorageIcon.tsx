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

const CloudStorageIcon = (p: SVGComponentProps) => {
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
        <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M44 29H4v13h40V29Z" />
        <path fill="#fff" d="M35.5 38a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M4 29 9.038 4.999H39.02l4.98 24" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M19.006 16.026c-2.143 0-4.006 1.486-4.006 3.487C15 22 17.095 23 19.697 23h1.28m8.03-6.974c2.097 0 3.993.973 3.993 3.487C33 22 30.89 23 28.288 23h-1.3m2.019-6.974C29.007 13.042 27.023 11 24 11c-3.023 0-4.994 1.993-4.994 5.026"
        />
        <path stroke="#000" strokeWidth={4} d="M20 23h8" />
      </svg>
    </span>
  );
};

CloudStorageIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CloudStorageIcon;
