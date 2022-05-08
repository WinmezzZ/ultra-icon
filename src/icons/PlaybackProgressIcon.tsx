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
const PlaybackProgressIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="null" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 5h40v26H4z" />
      <path
        fill="null"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m22 14 6 4-6 4v-8Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M11 40H6m11 0h25m-25 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};

PlaybackProgressIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PlaybackProgressIcon = withWrapper(PlaybackProgressIconComponent);
export default PlaybackProgressIcon;
