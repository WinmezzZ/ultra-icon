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
const CosmeticBrushIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
        <path
          fill="null"
          stroke="#000"
          d="M16.1 25.828 38.728 6.03s2.121-2.12 4.243 0c2.12 2.122 0 4.243 0 4.243L23.17 32.9l-7.07-7.072Z"
        />
        <path stroke="#333" strokeLinecap="round" d="m22.465 20.879 5.657 5.657" />
        <path
          stroke="#000"
          d="m5.494 30.778 10.607-4.95 7.07 7.072-4.949 10.606s-4.95.707-9.192-3.535c-4.243-4.243-3.536-9.193-3.536-9.193Z"
        />
        <path stroke="#000" strokeLinecap="round" d="m6.908 36.435 4.95-2.121m.707 7.778 1.414-2.828" />
        <path stroke="#000" d="m18.93 23.354 2.828-2.475 2.828-2.475m6.01 6.01-2.475 2.829-2.475 2.828" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

CosmeticBrushIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CosmeticBrushIcon = withWrapper(CosmeticBrushIconComponent);
export default CosmeticBrushIcon;
