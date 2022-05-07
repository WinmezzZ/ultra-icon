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

const SystemIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <rect
          width={14}
          height={14}
          x={6}
          y={6}
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={2}
        />
        <rect
          width={14}
          height={14}
          x={6}
          y={28}
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={2}
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M35 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        />
        <rect
          width={14}
          height={14}
          x={28}
          y={28}
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={2}
        />
      </svg>
    </span>
  );
};

SystemIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SystemIcon;
