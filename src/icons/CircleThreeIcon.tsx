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

const CircleThreeIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M32.904 13.927A10 10 0 0 1 24 19.37a10 10 0 0 1-8.904-5.443A14.979 14.979 0 0 0 9 26c0 .818.065 1.62.191 2.402.267-.021.537-.032.809-.032 5.523 0 10 4.477 10 10 0 .696-.071 1.376-.207 2.032 1.335.39 2.747.598 4.207.598s2.872-.209 4.207-.598A10.038 10.038 0 0 1 28 38.37c0-5.523 4.477-10 10-10 .272 0 .542.011.809.032A15.11 15.11 0 0 0 39 26a14.98 14.98 0 0 0-6.096-12.073Z"
        />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM9 43a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm30 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

CircleThreeIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CircleThreeIcon;
