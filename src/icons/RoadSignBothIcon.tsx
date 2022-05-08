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
const RoadSignBothIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <g stroke="#000" strokeLinejoin="round" strokeWidth={4}>
        <path fill="null" d="M10 8v8h28l4-4-4-4H10Zm28 15v8H10l-4-4 4-4h28Z" />
        <path strokeLinecap="round" d="M24 31v13m0-28v7m0-19v4m-5 36h10" />
      </g>
    </svg>
  );
};

RoadSignBothIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RoadSignBothIcon = withWrapper(RoadSignBothIconComponent);
export default RoadSignBothIcon;
