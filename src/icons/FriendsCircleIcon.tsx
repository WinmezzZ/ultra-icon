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

const FriendsCircleIcon = (p: SVGComponentProps) => {
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
          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
        />
        <path fill="null" fillRule="evenodd" d="M31 7v17V7Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M31 7v17" />
        <path fill="null" fillRule="evenodd" d="m16.636 6.636 14.142 14.142L16.636 6.636Z" clipRule="evenodd" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m16.636 6.636 14.142 14.142"
        />
        <path fill="null" fillRule="evenodd" d="M7 17h17H7Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M7 17h17" />
        <path fill="null" fillRule="evenodd" d="M20.364 17.636 6.222 31.778l14.142-14.142Z" clipRule="evenodd" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M20.364 17.636 6.222 31.778"
        />
        <path fill="null" fillRule="evenodd" d="M17 25v17-17Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 25v17" />
        <path fill="null" fillRule="evenodd" d="m17.636 27.636 14.142 14.142-14.142-14.142Z" clipRule="evenodd" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m17.636 27.636 14.142 14.142"
        />
        <path fill="null" fillRule="evenodd" d="M24 31h18-18Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 31h18" />
        <path fill="null" fillRule="evenodd" d="M42.364 16.636 28.222 30.778l14.142-14.142Z" clipRule="evenodd" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M42.364 16.636 28.222 30.778"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 31a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        />
      </svg>
    </span>
  );
};

FriendsCircleIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FriendsCircleIcon;
