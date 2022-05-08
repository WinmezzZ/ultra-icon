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
const CarrotIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeWidth={4}
        d="M15.624 20.682C14.29 15.248 18.404 10 24 10s9.71 5.248 8.376 10.682L27.279 41.43a3.376 3.376 0 0 1-6.557 0l-5.098-20.747Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M24 4v5.5m6.101-3.908-2.727 3.25M18 5.592l2.727 3.25M16 19h6m3 7h6m-12 8h4"
      />
    </svg>
  );
};

CarrotIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CarrotIcon = withWrapper(CarrotIconComponent);
export default CarrotIcon;
