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

const NailPolishIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeWidth={4}
          d="M18.895 5.89A2 2 0 0 1 20.892 4h6.216a2 2 0 0 1 1.997 1.89l.778 14A2 2 0 0 1 27.886 22h-7.772a2 2 0 0 1-1.997-2.11l.778-14Z"
        />
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="M11 28a6 6 0 0 1 6-6h14a6 6 0 0 1 6 6v13a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V28Z"
        />
        <circle cx={24} cy={33} r={3} fill="#fff" />
      </svg>
    </span>
  );
};

NailPolishIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default NailPolishIcon;
