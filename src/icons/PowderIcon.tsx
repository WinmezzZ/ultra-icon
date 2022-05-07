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

const PowderIcon = (p: SVGComponentProps) => {
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
          strokeLinejoin="round"
          strokeWidth={4}
          d="M44 40V20a3 3 0 0 0-3-3h-5.285c-1.541 0-2.892 1.243-3.924 2.388C30.633 20.674 28.377 22 24 22c-4.377 0-6.633-1.326-7.791-2.612C15.177 18.243 13.826 17 12.285 17H7a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M33 17c0 2.761-4.03 5-9 5s-9-2.239-9-5"
        />
        <ellipse
          cx={24}
          cy={10}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={9}
          ry={5}
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M33 17v-7m-18 7v-7" />
        <ellipse cx={27} cy={10} fill="#000" rx={2} ry={1} />
        <ellipse cx={21} cy={10} fill="#000" rx={2} ry={1} />
      </svg>
    </span>
  );
};

PowderIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PowderIcon;
