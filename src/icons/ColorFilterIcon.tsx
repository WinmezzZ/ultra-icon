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

const ColorFilterIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 40.944A11.955 11.955 0 0 0 32 44c6.627 0 12-5.373 12-12 0-5.592-3.824-10.29-9-11.622"
        />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M13 20.378C7.824 21.71 4 26.408 4 32c0 6.627 5.373 12 12 12s12-5.373 12-12c0-1.55-.294-3.03-.828-4.39"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 28c6.627 0 12-5.373 12-12S30.627 4 24 4 12 9.373 12 16s5.373 12 12 12Z"
        />
      </svg>
    </span>
  );
};

ColorFilterIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ColorFilterIcon;
