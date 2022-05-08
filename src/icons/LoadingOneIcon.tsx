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
const LoadingOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 4v4m10-1.32-2 3.463M41.32 14l-3.464 2M44 24h-4m1.32 10-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32 2-3.464M6.68 34l3.463-2M4 24h4M6.68 14l3.463 2M14 6.68l2 3.463"
      />
    </svg>
  );
};

LoadingOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LoadingOneIcon = withWrapper(LoadingOneIconComponent);
export default LoadingOneIcon;
