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

const GobletFullIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M33 44H13m10-16v16" />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M35 16c0 1.675-.357 3.284-1 4.75C32.148 24.97 27.92 28 23 28a12 12 0 0 1-10.79-6.742A11.953 11.953 0 0 1 11 16c0-2.373.533-4.613 1.21-6.5C13.387 6.217 15 4 15 4h16s1.815 2.496 3 6.112c.574 1.752 1 3.767 1 5.888Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M35 16s-7 3-12 0-12 0-12 0"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M34 10.112c.574 1.752 1 3.767 1 5.888 0 1.675-.357 3.284-1 4.75M12.21 9.5C11.533 11.387 11 13.627 11 16c0 1.886.435 3.67 1.21 5.258"
        />
      </svg>
    </span>
  );
};

GobletFullIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default GobletFullIcon;
