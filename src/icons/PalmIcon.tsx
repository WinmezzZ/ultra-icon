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

const PalmIcon = (p: SVGComponentProps) => {
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
          d="M18.333 35.813 8.62 24.933a3.8 3.8 0 1 1 5.803-4.905L16 22V8.994a3 3 0 1 1 6 0V7a3 3 0 1 1 6 0v1.83a3 3 0 1 1 6 0v3.316a3 3 0 0 1 6 0v13.682c0 2.14-.678 4.227-1.937 5.958l-2.833 3.898a.768.768 0 0 1-.621.316H18.75a.56.56 0 0 1-.417-.187Z"
        />
        <rect
          width={16}
          height={8}
          x={19}
          y={36}
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={1}
        />
      </svg>
    </span>
  );
};

PalmIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PalmIcon;
