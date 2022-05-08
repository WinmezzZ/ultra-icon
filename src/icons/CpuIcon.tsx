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
const CpuIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M38 8H10a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"
      />
      <path fill="null" stroke="#333" strokeLinejoin="round" strokeWidth={4} d="M30 18H18v12h12V18Z" />
      <path fill="null" fillRule="evenodd" d="M14.91 2v6-6Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14.91 2v6" />
      <path fill="null" fillRule="evenodd" d="M14.91 40v6-6Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14.91 40v6" />
      <path fill="null" fillRule="evenodd" d="M24 2v6-6Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 2v6" />
      <path fill="null" fillRule="evenodd" d="M24 40v6-6Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 40v6" />
      <path fill="null" fillRule="evenodd" d="M33.09 2v6-6Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M33.09 2v6" />
      <path fill="null" fillRule="evenodd" d="M33.09 40v6-6Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M33.09 40v6" />
      <path fill="null" fillRule="evenodd" d="M2 14.91h6-6Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M2 14.91h6" />
      <path fill="null" fillRule="evenodd" d="M40 14.91h6-6Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M40 14.91h6" />
      <path fill="null" fillRule="evenodd" d="M2 24h6-6Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M2 24h6" />
      <path fill="null" fillRule="evenodd" d="M40 24h6-6Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M40 24h6" />
      <path fill="null" fillRule="evenodd" d="M2 33.09h6-6Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M2 33.09h6" />
      <path fill="null" fillRule="evenodd" d="M40 33.09h6-6Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M40 33.09h6" />
    </svg>
  );
};

CpuIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CpuIcon = withWrapper(CpuIconComponent);
export default CpuIcon;
