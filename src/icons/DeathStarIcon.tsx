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

const DeathStarIcon = (p: SVGComponentProps) => {
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
        <circle cx={24} cy={24} r={20} fill="null" stroke="#000" strokeWidth={4} />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M5 25h39" />
        <circle cx={19} cy={15} r={4} fill="null" stroke="#333" strokeWidth={4} />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M31 31h12m-9-14h8M25 37h14" />
        <path
          stroke="#000"
          strokeWidth={4}
          d="M40 11.998A19.91 19.91 0 0 1 44 24c0 7.808-4.475 14.572-11 17.865M4.4 20c-.262 1.292-.4 2.63-.4 4 0 1.727.219 3.402.63 5"
        />
      </svg>
    </span>
  );
};

DeathStarIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DeathStarIcon;
