/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SurroundSoundFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4.05 4.121A6.978 6.978 0 0 0 5 12.071c0 1.933.784 3.683 2.05 4.95l1.414-1.414A4.984 4.984 0 0 1 7 12.07c0-1.38.56-2.63 1.464-3.535L7.05 7.12zm9.9 0-1.414 1.415A4.984 4.984 0 0 1 17 12.07c0 1.38-.56 2.63-1.464 3.536l1.414 1.414A6.978 6.978 0 0 0 19 12.07a6.978 6.978 0 0 0-2.05-4.95zM12 15.071a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </svg>
  );
};

SurroundSoundFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SurroundSoundFillIcon = withWrapper(SurroundSoundFillIconComponent);
export default SurroundSoundFillIcon;
