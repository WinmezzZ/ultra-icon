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

const PhoneTwoIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"
        />
        <path
          fill="null"
          stroke="#333"
          strokeLinejoin="round"
          strokeWidth={3.918}
          d="M19.44 14c.444 0 .854.241 1.07.63l1.496 2.695c.196.353.205.78.024 1.14L21 21s.252 2.252 2 4c1.748 1.748 4 2 4 2l2.527-1.038c.36-.18.788-.17 1.141.025l2.703 1.503c.388.216.629.625.629 1.07v3.103c0 1.58-1.468 2.721-2.965 2.216-3.076-1.038-7.85-3.013-10.875-6.04-3.026-3.025-5.001-7.798-6.039-10.874-.505-1.497.636-2.965 2.216-2.965h3.103Z"
        />
      </svg>
    </span>
  );
};

PhoneTwoIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PhoneTwoIcon;
