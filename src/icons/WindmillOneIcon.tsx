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

const WindmillOneIcon = (p: SVGComponentProps) => {
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
          d="M34.517 13.846 34 11l-6.87-3.435a7 7 0 0 0-6.26 0L17.38 9.31m18.31 10.996L37 27.5 39.09 39M36 44H8l.956-5.258m1.68-9.242 2.936-16.145"
        />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M39.293 8.707a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414l-8.586 8.586a1 1 0 0 1-1.414 0l-2.586-2.586a1 1 0 0 1 0-1.414l8.586-8.586Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m27 21 4-4" />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M39.293 39.293a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1-1.414 0l-8.586-8.586a1 1 0 0 1 0-1.414l2.586-2.586a1 1 0 0 1 1.414 0l8.586 8.586Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m27 27 4 4" />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M8.707 39.293a1 1 0 0 1-1.414 0l-2.586-2.586a1 1 0 0 1 0-1.414l8.586-8.586a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414l-8.586 8.586Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m21 27-4 4" />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M8.707 8.707a1 1 0 0 1 0-1.414l2.586-2.586a1 1 0 0 1 1.414 0l8.586 8.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1-1.414 0L8.707 8.707Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m21 21-4-4" />
        <circle cx={24} cy={24} r={4} stroke="#000" strokeWidth={4} />
      </svg>
    </span>
  );
};

WindmillOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default WindmillOneIcon;
