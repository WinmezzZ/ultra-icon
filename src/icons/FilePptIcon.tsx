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
const FilePptIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M25 41h13v-7M25 7h13v7M25 34.243V44l-15-5.381V34m15-20.027V4L10 9.381v4.592"
      />
      <rect
        width={40}
        height={20}
        x={4}
        y={14}
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M10 19v10m11-10v10" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M35 20v8m-3-8h6m-28-1h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-3m11-6h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-3"
      />
    </svg>
  );
};

FilePptIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FilePptIcon = withWrapper(FilePptIconComponent);
export default FilePptIcon;
