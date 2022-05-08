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
const CubeFiveIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m30 27-6 17m-6-17 6 17m-6-17h12m11 7-11-7m11-13L30 27m11-13-17 3m6 10-6-10m0-13v13M7 14l17 3m-6 10 6-10m-6 10L7 14m11 13L7 34m34.32-20L24 4 6.68 14v20L24 44l17.32-10V14Z"
      />
    </svg>
  );
};

CubeFiveIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CubeFiveIcon = withWrapper(CubeFiveIconComponent);
export default CubeFiveIcon;
