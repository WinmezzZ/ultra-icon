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
const ZoomIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20 43c-4.726-1.767-8.668-7.815-10.64-11.357-.852-1.53-.403-3.408.964-4.502a3.83 3.83 0 0 1 5.1.283L17 29v-8.5a2.5 2.5 0 0 1 5 0v-4a2.5 2.5 0 0 1 5 0v8a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1 5 0v7.868c0 1.07-.265 2.128-.882 3.003C35.095 39.82 33.255 42.034 31 43c-3.5 1.5-6.63 1.634-11 0Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M13 8h22m-18 4-4-4 4-4m14 0 4 4-4 4"
      />
    </svg>
  );
};

ZoomIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ZoomIcon = withWrapper(ZoomIconComponent);
export default ZoomIcon;
