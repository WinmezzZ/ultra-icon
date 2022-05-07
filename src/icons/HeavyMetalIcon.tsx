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

const HeavyMetalIcon = (p: SVGComponentProps) => {
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
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m22.219 7.378 11.668 9.244L36.177 24l-10.915 2.085L12.59 14.531l2.692-5.53 6.938-1.623Z"
          clipRule="evenodd"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m15.28 9.001 11.206 9.6" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m25.262 26.085 1.224-7.953 7.4-1.51m-8.893 14.401 2.286 7.08-11.678 2.276L4 29.014l2.57-6.389 5.458-1.271"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m6.57 22.625 10.714 10.133" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m15.601 39.865 1.885-7.733 7.505-1.088"
        />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M34.887 29.608 34 36.8l9.236-1.801-1.955-6.812-6.394 1.42Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

HeavyMetalIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HeavyMetalIcon;
