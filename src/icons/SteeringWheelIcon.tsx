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
const SteeringWheelIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm0 0V32M4 24h12m28 0H32"
      />
      <path fill="null" d="M32 24a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
      <path fill="null" fillRule="evenodd" d="M32 24a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" clipRule="evenodd" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32 24a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      />
    </svg>
  );
};

SteeringWheelIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SteeringWheelIcon = withWrapper(SteeringWheelIconComponent);
export default SteeringWheelIcon;
