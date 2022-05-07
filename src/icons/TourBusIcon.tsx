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

const TourBusIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M9 23h30v11a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V23Z"
        />
        <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M9 8a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v15H9V8Z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M15 42a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3Zm18 0a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M6 12v4m36-4v4" />
        <circle cx={15} cy={30} r={2} fill="#fff" />
        <circle cx={33} cy={30} r={2} fill="#fff" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m31 6-9 10m16-9-5 6" />
      </svg>
    </span>
  );
};

TourBusIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default TourBusIcon;
