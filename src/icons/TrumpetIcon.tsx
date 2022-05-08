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
const TrumpetIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="null" stroke="#000" strokeWidth={4} d="M32 28h6v11a3 3 0 1 1-6 0V28Z" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M29 12h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H28" />
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M14 14h-2a6 6 0 0 0 0 12h2" />
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M14.198 33a.198.198 0 0 1-.198-.198V6.198c0-.11.089-.198.198-.198H17.5C24.956 6 31 12.044 31 19.5S24.956 33 17.5 33h-3.302Z"
      />
    </svg>
  );
};

TrumpetIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TrumpetIcon = withWrapper(TrumpetIconComponent);
export default TrumpetIcon;
