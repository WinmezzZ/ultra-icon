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
const RoadConeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        d="M27 6h-6l-1.25 4.5L18.5 15 16 24l-2.5 9-1.25 4.5L11 42h26l-1.5-5.4L32 24l-2.5-9-1.25-4.5L27 6Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M37 42H11m26 0H6h5m26 0h5m-5 0-1.5-5.4L32 24l-2.5-9-1.25-4.5L27 6h-6l-1.25 4.5L18.5 15 16 24l-2.5 9-1.25 4.5L11 42"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M13.5 33h21M32 24H16m13.5-9h-11"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m28.25 10.5 7.25 26.1m-23.25.9 7.5-27"
      />
    </svg>
  );
};

RoadConeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RoadConeIcon = withWrapper(RoadConeIconComponent);
export default RoadConeIcon;
