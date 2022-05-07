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

const ChickenIcon = (p: SVGComponentProps) => {
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
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M35.979 15.5a10.65 10.65 0 0 0-1.71-1.275l-1.466-.88a13.247 13.247 0 0 0-4.412-1.667l-.524-.097a27.107 27.107 0 0 1-8.051-2.855 2.792 2.792 0 1 0-2.965 3.396A22.772 22.772 0 0 1 21 17.647"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M11.307 25.02C11.045 25.3 8 28.65 8 32c0 3.5 1.558 5 3 6s3.72 2 5.61 2C18.5 40 28.5 41 33 40s5-2 7-4c1.081-1.081 1.882-2.602 2.39-3.77a22.524 22.524 0 0 0 1.175-3.502c.36-1.436.723-3.498.435-5.228-.5-3-2-5-7-7.5-4.604-2.302-8.647-1.212-9.258-1.025a4.026 4.026 0 0 0-.161.054c-.8.283-7.265 2.596-10.01 4.471-2.802 1.914-5.962 5.202-6.228 5.481a3.304 3.304 0 0 0-.036.038Z"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M6.103 20.01a2.792 2.792 0 1 1 2.965-3.396 27.105 27.105 0 0 0 8.051 2.854l.524.097c1.559.288 3.053.853 4.412 1.668l1.466.88a10.65 10.65 0 0 1 2.602 2.196l.406.473a6.597 6.597 0 0 1 1.532 5.169l-.028.212a5.952 5.952 0 0 1-1.637 3.366l-.462.473a6.672 6.672 0 0 1-5.875 1.925 8.34 8.34 0 0 1-4.425-2.23l-.739-.715a9.314 9.314 0 0 1-1.532-1.935l-2.172-3.652-.634-1.27a22.769 22.769 0 0 0-4.454-6.115Z"
        />
      </svg>
    </span>
  );
};

ChickenIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ChickenIcon;
