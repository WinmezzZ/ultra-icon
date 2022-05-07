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

const WechatIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          fillRule="evenodd"
          d="M36.997 21.711C36.843 13.008 29.74 6 21 6 12.163 6 5 13.163 5 22c0 4.17 1.595 7.968 4.209 10.815l-1.199 7.21 7.115-3.055c3.135 1.042 6.093 1.303 8.875.782"
          clipRule="evenodd"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M36.997 21.711C36.843 13.008 29.74 6 21 6 12.163 6 5 13.163 5 22c0 4.17 1.595 7.968 4.209 10.815l-1.199 7.21 7.115-3.055c3.135 1.042 6.093 1.303 8.875.782"
        />
        <path
          fill="#fff"
          d="M15.125 20.467a2.258 2.258 0 0 0 2.25-2.267 2.258 2.258 0 0 0-2.25-2.267 2.258 2.258 0 0 0-2.25 2.267 2.258 2.258 0 0 0 2.25 2.267Zm9 0a2.258 2.258 0 0 0 2.25-2.267 2.258 2.258 0 0 0-2.25-2.267 2.258 2.258 0 0 0-2.25 2.267 2.258 2.258 0 0 0 2.25 2.267Z"
        />
        <path
          fill="null"
          fillRule="evenodd"
          d="M38.762 39.93A10.453 10.453 0 0 1 32.5 42C26.701 42 22 37.299 22 31.5S26.701 21 32.5 21 43 25.701 43 31.5c0 1.6-.358 3.116-.998 4.473"
          clipRule="evenodd"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M38.762 39.93A10.453 10.453 0 0 1 32.5 42C26.701 42 22 37.299 22 31.5S26.701 21 32.5 21 43 25.701 43 31.5c0 1.6-.358 3.116-.998 4.473"
        />
        <path fill="null" fillRule="evenodd" d="M42.002 35.973 43 42l-4.238-2.07" clipRule="evenodd" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M42.002 35.973 43 42l-4.238-2.07"
        />
        <path
          fill="#fff"
          d="M35.688 30.8A1.694 1.694 0 0 1 34 29.1c0-.939.755-1.7 1.688-1.7.931 0 1.687.761 1.687 1.7s-.755 1.7-1.688 1.7Zm-6.75 0a1.694 1.694 0 0 1-1.688-1.7c0-.939.756-1.7 1.688-1.7.931 0 1.687.761 1.687 1.7s-.756 1.7-1.688 1.7Z"
        />
      </svg>
    </span>
  );
};

WechatIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default WechatIcon;
