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
const RobotIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <rect
        width={30}
        height={26}
        x={9}
        y={17}
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m33 9-5 8M15 9l5 8" />
      <circle cx={34} cy={7} r={2} stroke="#000" strokeWidth={4} />
      <circle cx={14} cy={7} r={2} stroke="#000" strokeWidth={4} />
      <rect width={16} height={8} x={16} y={24} fill="null" stroke="#000" strokeWidth={4} rx={4} />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 24H4v10h5m30-10h5v10h-5" />
    </svg>
  );
};

RobotIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RobotIcon = withWrapper(RobotIconComponent);
export default RobotIcon;
