/**
 * These code auto generated by UltraIcon
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const defaultProps = {
  size: 24,
};

const BroadcastOneIcon = (p: SVGComponentProps) => {
  const { size, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path fill="#2F88FF" stroke="#000" strokeWidth={4} d="M24 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 15v8m6 0v10M18 23v10" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M7 33V23l34 .013V33" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={5} d="M41 41v1M7 41v1m11-1v1m12-1v1" />
      </svg>
    </span>
  );
};

BroadcastOneIcon.propTypes = {
  size: PropTypes.number,
};
export default BroadcastOneIcon;
