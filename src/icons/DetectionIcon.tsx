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

const DetectionIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m6.45 34.85 3.99-3.348.513-5.87 7.98-6.696 8.778-7.365 3.192-2.679a7.292 7.292 0 1 1 9.373 11.172l-3.191 2.678-8.778 7.365-7.98 6.696-5.867-.51-3.987 3.345a3.129 3.129 0 0 1-4.408-.386 3.125 3.125 0 0 1 .385-4.403Z"
          clipRule="evenodd"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M23.436 9.718 38.209 27.32M18.576 29l5.726-5" />
      </svg>
    </span>
  );
};

DetectionIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DetectionIcon;
