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

const HeavyWindIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M4 19.885C4 12.217 10.105 6 17.636 6c6.297 0 11.598 4.346 13.166 10.253a8.921 8.921 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.257 0 3.642-2.066 6.793-5.07 8.304-.25.126-.53.182-.81.182H15m0 0h-3a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h3"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M22 18h-3a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h3m-3 0h13"
        />
      </svg>
    </span>
  );
};

HeavyWindIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HeavyWindIcon;
