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

const GameThreeIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M19 30v3a7 7 0 0 1-7 7v0a7 7 0 0 1-7-7V19m24 11v3a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7V19"
        />
        <rect width={38} height={22} x={5} y={8} fill="null" stroke="#000" strokeWidth={4} rx={11} />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M21 19h-8m4-4v8" />
        <rect width={4} height={4} x={32} y={15} fill="#fff" rx={2} />
        <rect width={4} height={4} x={28} y={20} fill="#fff" rx={2} />
      </svg>
    </span>
  );
};

GameThreeIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default GameThreeIcon;
