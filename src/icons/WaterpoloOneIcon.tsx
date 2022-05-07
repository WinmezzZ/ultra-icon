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

const WaterpoloOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="m4 35 2.5 1.351c1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0L44 35M4 41l2.5 1.351c1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0L44 41"
        />
        <path
          fill="null"
          stroke="#000"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="M25 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="m25 29-1-4M4 11l7 11 13 2.93h18"
        />
        <path fill="#000" d="M11 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </svg>
    </span>
  );
};

WaterpoloOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default WaterpoloOneIcon;
