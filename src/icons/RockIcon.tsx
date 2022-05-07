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

const RockIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M23.5 20.5c-1.154 0-4.348-.169-8.386 4.446-2.403 2.746-2.827 6.087-2.65 8.41.085 1.105 1.205 1.714 2.234 1.303.744-.297 1.56-.668 2.146-1.06 1.731-1.153 1.154-2.307 1.731-4.037.577-1.731 2.885-2.885 5.192-2.308 2.308.577 3.19 2.33 3.462 4.038C27.5 33 26.5 35 24.344 35.907c-2.378 1.002-3.461 0-6.346-.576-1.503-.301-3.006 1.014-3.871 1.967a1.514 1.514 0 0 0-.118 1.918c.289.402.661.863 1.105 1.307 1.154 1.153 5.769 4.615 10.384 4.038s8.653-4.038 10.384-8.077C37.612 32.446 37 27 33 24"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M33 24 23.128 4.24c-.23-.46-.776-.677-1.222-.42-1.04.598-2.26 1.722-1.863 3.467C20.553 9.537 25.58 27.049 27 30"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m36 27-.948-19.31c-.024-.499-.415-.911-.914-.88-1.201.077-2.814.548-3.225 2.307-.524 2.247-.9 5.608-.913 8.883"
        />
      </svg>
    </span>
  );
};

RockIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default RockIcon;
