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
const BreadMachineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M7 27a8 8 0 0 1 8-8h18a8 8 0 0 1 8 8v8a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4v-8Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 19v-7c5 0 5-7 0-7H14c-5 0-5 7 0 7v7m8-8-2 2m8-2-2 2"
      />
      <circle cx={24} cy={29} r={4} fill="null" stroke="#333" strokeWidth={4} />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 39v4m18-4v4" />
    </svg>
  );
};

BreadMachineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BreadMachineIcon = withWrapper(BreadMachineIconComponent);
export default BreadMachineIcon;
