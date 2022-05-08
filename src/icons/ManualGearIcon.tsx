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
const ManualGearIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M40 12v12H8m16-12v24M8 12v24"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M44 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM28 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm16 32a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-16 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <circle
        cx={40}
        cy={40}
        r={4}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
    </svg>
  );
};

ManualGearIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ManualGearIcon = withWrapper(ManualGearIconComponent);
export default ManualGearIcon;
