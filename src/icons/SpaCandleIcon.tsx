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

const SpaCandleIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M6.54 26.434A2 2 0 0 1 8.494 24h31.014a2 2 0 0 1 1.952 2.434l-3.111 14A2 2 0 0 1 36.396 42H11.604a2 2 0 0 1-1.952-1.566l-3.111-14Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M20.643 9.889C22.074 8.009 23.178 5.41 23.774 4c1.044 1.41 3.31 4.948 4.026 6.829.894 2.35-1.342 5.171-4.026 5.171-2.684 0-4.92-3.76-3.131-6.111ZM24 16v8"
        />
      </svg>
    </span>
  );
};

SpaCandleIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SpaCandleIcon;
