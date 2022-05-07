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

const WatermelonOneIcon = (p: SVGComponentProps) => {
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
          d="m24 4 17 29.92S36.046 38 24 38 7 33.92 7 33.92L24 4Z"
        />
        <circle cx={24} cy={17} r={2} fill="#fff" />
        <circle cx={27} cy={23} r={2} fill="#fff" />
        <circle cx={21} cy={23} r={2} fill="#fff" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M41 39.92S36.046 44 24 44 7 39.92 7 39.92" />
      </svg>
    </span>
  );
};

WatermelonOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default WatermelonOneIcon;
