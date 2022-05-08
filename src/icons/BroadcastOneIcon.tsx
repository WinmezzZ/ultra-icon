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
const BroadcastOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="null" stroke="#000" strokeWidth={4} d="M24 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 15v8m6 0v10M18 23v10" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M7 33V23l34 .013V33" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={5} d="M41 41v1M7 41v1m11-1v1m12-1v1" />
    </svg>
  );
};

BroadcastOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BroadcastOneIcon = withWrapper(BroadcastOneIconComponent);
export default BroadcastOneIcon;
