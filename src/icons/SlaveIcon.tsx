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

const SlaveIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M38 38v-7.5M10 38V6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v1"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M25 13h-1a6 6 0 0 0-6 6v0a6 6 0 0 0 6 6h1m8-12h1a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6h-1m-8-6h8"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10 38a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H16a6 6 0 0 1-6-6Z"
        />
        <circle cx={32} cy={38} r={2} fill="#fff" />
      </svg>
    </span>
  );
};

SlaveIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SlaveIcon;
