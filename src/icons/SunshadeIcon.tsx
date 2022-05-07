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

const SunshadeIcon = (p: SVGComponentProps) => {
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
          d="M40.103 25.817c-.896 2.283-9.672 3.009-18.741.579-9.07-2.43-14.78-6.844-14.1-9.379 1.533-5.724 9.712-14.555 21.41-10.328 11.696 4.226 12.965 13.404 11.431 19.128Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M28 7s-4 6.5-7 17-3 18-3 18M28 7S17.794 8.844 15 17M28 7s6 6 3 15"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10 43s9-1.5 16-1.5 13 .5 13 .5M28 7c1 0 3-1 3.814-2.58M34 41c0-1.657-1-4-4-4s-4 2.343-4 4"
        />
      </svg>
    </span>
  );
};

SunshadeIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SunshadeIcon;
