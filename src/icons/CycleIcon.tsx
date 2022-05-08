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
const CycleIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M13 35H7v6m34 0h-6v-6m0-22h6V7M7 7h6v6"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M13 7.294C7.578 10.871 4 17.018 4 24c0 1.02.076 2.021.223 3M27 43.776A20.16 20.16 0 0 1 24 44c-6.982 0-13.129-3.578-16.706-9m36.482-14c.148.979.224 1.98.224 3 0 6.982-3.578 13.129-9 16.706M21 4.223A20.16 20.16 0 0 1 24 4c6.982 0 13.129 3.578 16.706 9"
      />
    </svg>
  );
};

CycleIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CycleIcon = withWrapper(CycleIconComponent);
export default CycleIcon;
