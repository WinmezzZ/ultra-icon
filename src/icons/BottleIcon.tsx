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

const BottleIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M36 18H12v26h24V18Z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M19.894 11h8.212a4 4 0 0 1 3.8 2.75L33.303 18H14.695l1.4-4.25a4 4 0 0 1 3.8-2.75Z"
          clipRule="evenodd"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M21 11V7a3 3 0 1 1 6 0v4" />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M18.5 26v10" />
      </svg>
    </span>
  );
};

BottleIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BottleIcon;
