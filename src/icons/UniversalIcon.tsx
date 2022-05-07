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

const UniversalIcon = (p: SVGComponentProps) => {
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
          d="M24 38c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeWidth={4}
          d="M11 29c1.509.624 4 1 5.259-.468 1.258-1.469.136-3.78 1.53-4.564 1.528-.86 2.631 2.064 5.502 1.548S28 21 28 19s-1.715-2-1.838-3.946C26 12.5 28 11 28 11m0 26c-1.086-.909-2-1.5-2-3s1-1 2-2 .5-3 1.5-3.5 4.108.556 6.5 2.5"
        />
        <circle cx={24} cy={4} r={2} fill="#000" />
        <circle cx={24} cy={44} r={2} fill="#000" />
        <circle cx={44} cy={24} r={2} fill="#000" />
        <circle cx={38} cy={10} r={2} fill="#000" />
        <circle cx={10} cy={38} r={2} fill="#000" />
        <circle cx={4} cy={24} r={2} fill="#000" />
        <circle cx={10} cy={10} r={2} fill="#000" />
        <circle cx={38} cy={38} r={2} fill="#000" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10 24c0 3.815 1.526 7.273 4 9.798M24 38c7.732 0 14-6.268 14-14M24 10c3.815 0 7.273 1.526 9.798 4"
        />
      </svg>
    </span>
  );
};

UniversalIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default UniversalIcon;
