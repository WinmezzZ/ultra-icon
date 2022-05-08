/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const AimingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <circle cx={24} cy={24} r={20} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path fill="null" fillRule="evenodd" d="M24 37v7-7Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 37v7" />
      <path fill="null" fillRule="evenodd" d="M36 24h8-8Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M36 24h8" />
      <path fill="null" fillRule="evenodd" d="M4 24h7-7Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 24h7" />
      <path fill="null" fillRule="evenodd" d="M24 11V4v7Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 11V4" />
    </svg>
  );
};

AimingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AimingIcon = withWrapper(AimingIconComponent);
export default AimingIcon;
