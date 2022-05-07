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

const RadioNannyIcon = (p: SVGComponentProps) => {
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
          strokeWidth={4}
          d="M36 42.001V21.688C36 15.313 31.09 10 24 10s-12 5.313-12 11.688V42c0 1.105.895 1.999 2 1.999h20c1.105 0 2-.894 2-1.999Z"
        />
        <circle cx={24} cy={23} r={4} fill="null" stroke="#333" strokeLinecap="round" strokeWidth={4} />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M18 34h2m6 4h4" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M12 20V4" />
      </svg>
    </span>
  );
};

RadioNannyIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default RadioNannyIcon;
