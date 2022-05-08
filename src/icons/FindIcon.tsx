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
const FindIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M4 7h40M4 23h11M4 39h11" />
      <path fill="null" stroke="#000" strokeWidth={4} d="M31.5 34a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m37 32 7 7.05" />
    </svg>
  );
};

FindIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FindIcon = withWrapper(FindIconComponent);
export default FindIcon;
