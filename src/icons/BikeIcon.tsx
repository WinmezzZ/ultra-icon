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
const BikeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M10.5 42a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17ZM37 42a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M18.997 6h9L37 33" />
      <path fill="null" fillRule="evenodd" d="m11.058 33 20.624-16.237L11.058 33Z" clipRule="evenodd" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m11.058 33 20.624-16.237m0-1.763h8.472L42 10M8 15.974h7M15 16l3.273 10.421"
      />
    </svg>
  );
};

BikeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BikeIcon = withWrapper(BikeIconComponent);
export default BikeIcon;
