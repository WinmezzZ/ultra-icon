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
const TruckIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M12 39a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm23 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M8 35H2V11h29v24H16m15 0V18h8.571L46 26.5V35h-6.189"
      />
    </svg>
  );
};

TruckIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TruckIcon = withWrapper(TruckIconComponent);
export default TruckIcon;
