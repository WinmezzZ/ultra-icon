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

const MacadamiaNutIcon = (p: SVGComponentProps) => {
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 43c10.493 0 19-8.059 19-18h-8l-3 3-3-3H5c0 9.941 8.507 18 19 18Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M40.945 25c.124-.815 0-1.65 0-2.5 0-9.113-7.363-17.5-16.447-17.5-3.822 0-8.337 1.309-11.13 3.504A4.99 4.99 0 0 1 14.033 11a4.986 4.986 0 0 1-6.004 4.895c-.63 1.75-.974 4.637-.974 6.605 0 .85-.124 1.685 0 2.5M6 31h10"
        />
      </svg>
    </span>
  );
};

MacadamiaNutIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MacadamiaNutIcon;
