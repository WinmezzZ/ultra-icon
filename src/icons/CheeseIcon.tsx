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

const CheeseIcon = (p: SVGComponentProps) => {
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
          d="M43 20c0-2.172-18.108-11.888-22.866-14.404a1.974 1.974 0 0 0-2.149.201L5 16"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M5 17.652c0-1.329 1.269-2.298 2.555-1.964 6.407 1.662 23.305 5.645 32.606 4.07 1.395-.235 2.839.779 2.839 2.193v16.151a2 2 0 0 1-1.895 1.998l-34 1.79A2 2 0 0 1 5 39.891v-22.24Z"
        />
        <circle cx={12} cy={25} r={2} fill="#fff" />
        <circle cx={25} cy={27} r={2} fill="#fff" />
        <circle cx={34} cy={32} r={2} fill="#fff" />
        <circle cx={18} cy={32} r={2} fill="#fff" stroke="#333" strokeWidth={2} />
      </svg>
    </span>
  );
};

CheeseIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CheeseIcon;
