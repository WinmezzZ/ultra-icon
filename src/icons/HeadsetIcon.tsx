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
const HeadsetIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M42 30v-5.538C42 14.265 33.941 6 24 6S6 14.265 6 24.462V30"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 32a4 4 0 0 1 4-4h4v14h-4a4 4 0 0 1-4-4v-6Z"
      />
      <path fill="#000" d="M42 32h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v-6ZM6 32H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-6Z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M6 28h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6V28Z"
      />
    </svg>
  );
};

HeadsetIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HeadsetIcon = withWrapper(HeadsetIconComponent);
export default HeadsetIcon;
