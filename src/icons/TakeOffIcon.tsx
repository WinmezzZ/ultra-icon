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
const TakeOffIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m22 29-8.224 4.112a3 3 0 0 1-3.287-.4L4 27.18l3.562-1.365a3 3 0 0 1 1.986-.057l3.28 1.047a3 3 0 0 0 2.27-.182l22.262-11.3A3 3 0 0 1 38.718 15H44l-1.553 3.106a3 3 0 0 1-1.341 1.341L32 24"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m22 29-4 2 5 10 9-17m-15 1-5-9 16 4"
      />
    </svg>
  );
};

TakeOffIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TakeOffIcon = withWrapper(TakeOffIconComponent);
export default TakeOffIcon;
