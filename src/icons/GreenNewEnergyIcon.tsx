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

const GreenNewEnergyIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M42.336 16C39.25 8.936 32.2 4 24 4 15.799 4 8.75 8.936 5.664 16"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 14a19.94 19.94 0 0 0-6 14.283c0 .5.018.996.055 1.488A19.938 19.938 0 0 1 24 44a19.938 19.938 0 0 1 5.945-14.23A19.94 19.94 0 0 0 24 14Z"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M4 24c0 11.046 8.954 20 20 20a19.938 19.938 0 0 0-5.945-14.23A19.936 19.936 0 0 0 4 24Z"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M44 24c0 11.046-8.954 20-20 20a19.938 19.938 0 0 1 5.945-14.23A19.936 19.936 0 0 1 44 24Z"
        />
      </svg>
    </span>
  );
};

GreenNewEnergyIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default GreenNewEnergyIcon;
