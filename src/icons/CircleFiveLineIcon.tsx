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

const CircleFiveLineIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M40 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm16 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 32a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
        <path fill="null" fillRule="evenodd" d="M20 40h8-8Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 40h8" />
        <path fill="null" fillRule="evenodd" d="M20 8h8-8Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 8h8" />
        <path fill="null" fillRule="evenodd" d="M8 20v8-8Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M8 20v8" />
        <path fill="null" fillRule="evenodd" d="M40 20v8-8Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M40 20v8" />
      </svg>
    </span>
  );
};

CircleFiveLineIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CircleFiveLineIcon;
