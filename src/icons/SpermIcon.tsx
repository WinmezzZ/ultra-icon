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
const SpermIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g clipPath="url(#prefix__a)">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth={4}
          d="M18.237 24.475c1.856 1.299 2.33 2.674 3.609 3.57 1.4.98 2.947 1.5 4.169 1.014 2.307-.916 3.976-3.908 6.011-6.815 3.96-5.655 3.954-14.385.26-16.971-3.692-2.586-11.843.433-15.802 6.088-1.935 2.763-4.47 6.445-4.317 8.002.129 1.311.57 2.042 1.958 3.275s2.132.45 4.112 1.837Z"
          clipRule="evenodd"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M13.617 22.317c-3.54 3.898-4.008 6.86-1.402 8.885 2.605 2.026 5.877 1.027 9.815-2.995"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M12.239 31.227c-3.097 3.388-3.667 6.546-1.71 9.477 2.937 4.396 8.755 4.155 11.595.879 2.84-3.277 8.184-11.396 14.059-9.727 5.875 1.669 4.877 8.088.939 8.762"
        />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

SpermIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SpermIcon = withWrapper(SpermIconComponent);
export default SpermIcon;
