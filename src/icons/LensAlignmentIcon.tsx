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
const LensAlignmentIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="null" d="M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M14 10a4 4 0 0 1-4 4m4-4a4 4 0 1 0-4 4m4-4h6m-10 4v6"
      />
      <path fill="null" d="M14 38a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M14 38a4 4 0 0 0-4-4m4 4a4 4 0 1 1-4-4m4 4h6m-10-4v-6"
      />
      <path fill="null" d="M34 38a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 38a4 4 0 0 1 4-4m-4 4a4 4 0 1 0 4-4m-4 4h-6m10-4v-6"
      />
      <path fill="null" d="M34 10a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 10a4 4 0 0 0 4 4m-4-4a4 4 0 1 1 4 4m-4-4h-6m10 4v6m-21 4h14m-7 7V17"
      />
    </svg>
  );
};

LensAlignmentIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LensAlignmentIcon = withWrapper(LensAlignmentIconComponent);
export default LensAlignmentIcon;
