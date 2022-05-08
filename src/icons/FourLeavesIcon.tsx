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
const FourLeavesIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M44 4S33.59 2.201 30 8c-2.672 4.317 1 9 1 9M44 4s1.799 10.41-4 14c-4.317 2.672-9-1-9-1M44 4 31 17m0 0-3 3m16 24s-10.41 1.799-14-4c-2.672-4.317 1-9 1-9m13 13s1.799-10.41-4-14c-4.317-2.672-9 1-9 1m13 13L31 31m0 0-3-3M4.264 4s10.41-1.799 14 4c2.672 4.317-1 9-1 9m-13-13s-1.8 10.41 4 14c4.316 2.672 9-1 9-1m-13-13 13 13m0 0 3 3m-16 24s10.41 1.799 14-4c2.672-4.317-1-9-1-9m-13 13s-1.8-10.41 4-14c4.316-2.672 9 1 9 1m-13 13 13-13m0 0 3-3"
      />
    </svg>
  );
};

FourLeavesIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FourLeavesIcon = withWrapper(FourLeavesIconComponent);
export default FourLeavesIcon;
