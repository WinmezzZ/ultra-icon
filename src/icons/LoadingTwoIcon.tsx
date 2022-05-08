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
const LoadingTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 4v8m14.142-2.142-5.657 5.657M44 24h-8m2.142 14.142-5.657-5.657M24 44v-8M9.858 38.142l5.657-5.657M4 24h8M9.858 9.858l5.657 5.657m.831-9.993 1.531 3.696M5.522 16.346l3.696 1.53M5.522 31.654l3.696-1.531m7.128 12.355 1.531-3.696m13.777 3.696-1.531-3.696m12.355-7.128-3.696-1.531m3.696-13.777-3.696 1.53M31.654 5.522l-1.531 3.696"
      />
    </svg>
  );
};

LoadingTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LoadingTwoIcon = withWrapper(LoadingTwoIconComponent);
export default LoadingTwoIcon;
