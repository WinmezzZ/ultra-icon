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

const FiveIcon = (p: SVGComponentProps) => {
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
          d="M11 40 6 25.5l-1.958-9.792a2.14 2.14 0 0 1-.042-.42v-.16c0-1.371 1.782-1.902 2.532-.755.056.085.105.173.147.265l3.932 8.519a1 1 0 0 0 1.259.517l.13-.049-1.87-13.68a2.32 2.32 0 0 1 .442-1.707 1.547 1.547 0 0 1 2.166-.31l.133.1c.41.308.719.73.886 1.215l4.112 11.879a.562.562 0 0 0 1.092-.22l-.883-13.685a2.696 2.696 0 0 1 .785-2.08 1.797 1.797 0 0 1 2.393-.132l.34.272a3 3 0 0 1 1.088 1.865l2.239 13.88a.568.568 0 0 0 1.127-.036l1.328-13.724a3 3 0 0 1 1.112-2.054l.206-.165a1.865 1.865 0 0 1 2.484.138c.525.524.82 1.236.82 1.978v19.51a1 1 0 0 0 1.54.84l4.472-2.874A4 4 0 0 1 40.175 24h2.068a1 1 0 0 1 .86 1.51L34.5 40S31 44 23 44s-11.333-2.667-12-4Z"
        />
      </svg>
    </span>
  );
};

FiveIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FiveIcon;
