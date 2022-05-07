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

const HddIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <rect
          width={30}
          height={40}
          x={9}
          y={4}
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={2}
        />
        <circle cx={32} cy={10} r={2} fill="#fff" />
        <circle cx={16} cy={10} r={2} fill="#fff" />
        <circle cx={32} cy={38} r={2} fill="#fff" />
        <circle cx={16} cy={38} r={2} fill="#fff" />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 30a8 8 0 1 0-8-8m8 0-6 6"
        />
      </svg>
    </span>
  );
};

HddIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HddIcon;
