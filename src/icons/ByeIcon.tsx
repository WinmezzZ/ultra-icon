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

const ByeIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="m35 26.614-19.854-19.3a2.928 2.928 0 0 0-4.259.188 3.333 3.333 0 0 0 .18 4.544l10.024 9.93"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M21.09 21.976 10.178 11.155a3.486 3.486 0 0 0-4.735-.161 3.032 3.032 0 0 0-.18 4.417l10.993 11.203"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M16.255 26.614 10 20.5a3.299 3.299 0 0 0-4.633-.08 3.233 3.233 0 0 0-.093 4.588c9.23 9.536 14.02 14.04 15.817 15.546C24 42.99 29.735 44 32.731 42c2.995-2 5.702-4.846 6.987-7.671.765-1.682 2.251-6.87 4.458-15.561a3.305 3.305 0 0 0-2.46-4.034 3.5 3.5 0 0 0-4.166 2.493L35 26.614m-3.284-13.948a19.596 19.596 0 0 0-8.752-7.186M5.194 33.776a19.598 19.598 0 0 0 8.364 7.635"
        />
      </svg>
    </span>
  );
};

ByeIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ByeIcon;
