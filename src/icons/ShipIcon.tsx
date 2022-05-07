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

const ShipIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
        <g fill="none" fillRule="evenodd">
          <path fill="#FFF" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M6 20.377 24 14l18 6.377L36.667 34H11.333z"
          />
          <path
            fill="null"
            fillRule="nonzero"
            stroke="#000"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M13 8h22l-.002 9.896L24 14l-11 3.896z"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M24 8V4m0 20v-8M10 40l3.5 4 3.5-4 3.5 4 3.5-4 3.5 4 3.5-4 3.5 4 3.5-4"
          />
        </g>
      </svg>
    </span>
  );
};

ShipIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ShipIcon;
