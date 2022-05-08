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
const DroneOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M29 18v-2a5 5 0 0 0-5-5v0a5 5 0 0 0-5 5v2"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M17 18h14l-2.154 7h-9.692L17 18Z"
      />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M5 22h7v7H5zm31 0h7v7h-7z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 8H4m26 25 4 7m-16-7-4 7M44 8H32"
      />
    </svg>
  );
};

DroneOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DroneOneIcon = withWrapper(DroneOneIconComponent);
export default DroneOneIcon;
