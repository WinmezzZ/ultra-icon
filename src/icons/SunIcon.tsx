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

const SunIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path fill="#000" fillRule="evenodd" d="M24 3v3.15V3Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 3v3.15" />
        <path fill="#000" fillRule="evenodd" d="m38.85 9.15-2.228 2.228 2.227-2.227Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m38.85 9.15-2.228 2.228" />
        <path fill="#000" fillRule="evenodd" d="M45 24h-3.15H45Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M45 24h-3.15" />
        <path fill="#000" fillRule="evenodd" d="m38.85 38.85-2.228-2.228 2.227 2.227Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m38.85 38.85-2.228-2.228" />
        <path fill="#000" fillRule="evenodd" d="M24 45v-3.15V45Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 45v-3.15" />
        <path fill="#000" fillRule="evenodd" d="m9.15 38.85 2.228-2.228-2.227 2.227Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m9.15 38.85 2.228-2.228" />
        <path fill="#000" fillRule="evenodd" d="M3 24h3.15H3Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M3 24h3.15" />
        <path fill="#000" fillRule="evenodd" d="m9.15 9.15 2.228 2.228-2.227-2.227Z" clipRule="evenodd" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m9.15 9.15 2.228 2.228" />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Z"
        />
      </svg>
    </span>
  );
};

SunIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SunIcon;
