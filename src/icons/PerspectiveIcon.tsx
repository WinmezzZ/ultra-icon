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
const PerspectiveIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M44 28v8l-13 2.6M44 28 4 32m40-4v-8M4 32v12l13-2.6M4 32V16m40 4v-8L31 9.4M44 20 4 16m0 0V4l13 2.6m14 2.8v29.2m0-29.2L17 6.6m14 32-14 2.8m0-34.8v34.8"
      />
    </svg>
  );
};

PerspectiveIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PerspectiveIcon = withWrapper(PerspectiveIconComponent);
export default PerspectiveIcon;
