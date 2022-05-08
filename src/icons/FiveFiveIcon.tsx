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
const FiveFiveIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M14.223 37.471 6.55 26.984a4.423 4.423 0 0 1 6.696-5.738L16 24V7.25a3.25 3.25 0 0 1 6.5 0v-1a3.25 3.25 0 0 1 6.5 0v1a3.25 3.25 0 0 1 6.5 0v4a3.25 3.25 0 0 1 6.5 0v19.058c0 2.73-.838 5.417-2.38 7.671C37.056 41.726 32.785 44 28.245 44H27.09a15.944 15.944 0 0 1-12.867-6.529Z"
      />
    </svg>
  );
};

FiveFiveIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FiveFiveIcon = withWrapper(FiveFiveIconComponent);
export default FiveFiveIcon;
