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
const IncreaseTheScaleIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M24 9a5 5 0 0 0-10 0v10a5 5 0 0 0 10 0V9Zm18 0a5 5 0 0 0-10 0v10a5 5 0 0 0 10 0V9Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m36 32 6 6-6 6" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M6 24h1" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M42 38H19" />
    </svg>
  );
};

IncreaseTheScaleIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const IncreaseTheScaleIcon = withWrapper(IncreaseTheScaleIconComponent);
export default IncreaseTheScaleIcon;
