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

const YepIcon = (p: SVGComponentProps) => {
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
          d="M32 42c-4.736 2.706-11 2.5-16 0s-9-8-9-12.5c0-2.623 4.356-4.53 6.196-5.219.46-.172.75-.64.677-1.126L11.586 7.909a3.404 3.404 0 1 1 6.75-.88L20 22l.83-15.77a3.408 3.408 0 1 1 6.795.518l-1.038 10.386A2.372 2.372 0 0 1 28.947 15 4.053 4.053 0 0 1 33 19.053V21.5a3.5 3.5 0 1 1 7 0v10.649c0 .566-.053 1.132-.253 1.661-.596 1.577-2.46 5.169-7.747 8.19Z"
        />
      </svg>
    </span>
  );
};

YepIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default YepIcon;
