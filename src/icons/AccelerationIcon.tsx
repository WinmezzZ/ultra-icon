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
const AccelerationIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M42 35h-8m-3 7h-4" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m14 22-6-5H4s5.486 10 8 10h32l-6-5H14Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m30 22-11.34-8H16l3 8m11 5L17.2 39H14l4.267-12"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32 11c0 1-3 2-3 2h10s2.886 0 3.745-2.286C43.63 8.36 42.045 5 39.022 5 36 5 36 8 36 8s-1.855-.571-3 0-1 2-1 3Z"
      />
    </svg>
  );
};

AccelerationIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AccelerationIcon = withWrapper(AccelerationIconComponent);
export default AccelerationIcon;
