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

const EntertainmentIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M16 24c5.523 0 10-4.477 10-10S21.523 4 16 4 6 8.477 6 14s4.477 10 10 10Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M26 15.202c.014.014 4.723 5.936 14.126 17.764a1 1 0 0 1-.062 1.346l-4.084 4.084a1 1 0 0 1-1.346.062L17.822 24m8.648.47 2.828 2.829"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M17 44.086c1.917-2.498 4.247-3.747 6.99-3.747 4.116 0 8.973 5.17 13.116 4.459 4.144-.712 5.33-4.798 2.78-7.06"
        />
      </svg>
    </span>
  );
};

EntertainmentIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default EntertainmentIcon;
