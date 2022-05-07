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

const NestsIcon = (p: SVGComponentProps) => {
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
          d="M4.999 32.314 20.034 5.943C20.958 3.98 22.627 3 25.04 3c3.62 0 5.977 4.986 5.977 4.986L35 8.58c-4.01.065-6.33.872-6.957 2.42-.94 2.322 2.456 4.731 2.975 8.004.52 3.273-1.55 8.801-6.529 11.563-3.319 1.841-7.462 2.32-12.43 1.433l-6.1 11"
        />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M14.942 26.978c2.58-4.65 4.275-7.635 5.087-8.956 1.219-1.982 6.245-1.385 4.44 3.563-1.204 3.298-4.38 5.095-9.527 5.393Zm18.026 6.006c1.142-2.737 2.81-4.395 5.003-4.975 2.193-.58 4.193-.227 6 1.06-1.125 2.595-2.794 4.26-5.005 4.992-2.211.733-4.21.373-5.998-1.077Z"
          clipRule="evenodd"
        />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M26.985 35.114c.757 2.722 2.762 4.542 6.014 5.461 3.253.92 5.93.394 8.033-1.575-2.6-3.03-4.944-4.694-7.03-4.99-2.087-.296-4.426.072-7.017 1.104Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

NestsIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default NestsIcon;
