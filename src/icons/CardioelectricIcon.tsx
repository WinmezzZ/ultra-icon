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
const CardioelectricIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M5.555 23.194a18.75 18.75 0 0 1-.514-1.188C4.393 20.347 4 18.604 4 16.8 4 10.835 8.884 6 14.91 6c3.794 0 7.136 1.918 9.09 4.828A10.928 10.928 0 0 1 33.09 6C39.117 6 44 10.835 44 16.8c0 7.765-7.273 14.4-10.91 18-2.423 2.4-5.454 4.8-9.09 7.2-3.636-2.4-6.667-4.8-9.09-7.2-.367-.362-.77-.756-1.199-1.178"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M8 29.973 19.114 19.04l6.464 6.666 9.684-9.887"
      />
    </svg>
  );
};

CardioelectricIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CardioelectricIcon = withWrapper(CardioelectricIconComponent);
export default CardioelectricIcon;
