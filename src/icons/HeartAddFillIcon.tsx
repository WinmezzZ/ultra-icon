/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const HeartAddFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm1.243-9.243a6.001 6.001 0 0 1 .507 7.91 6 6 0 0 0-8.061 8.127l-.69.691-8.478-8.492a6 6 0 0 1 8.48-8.464 5.998 5.998 0 0 1 8.242.228z" />
    </svg>
  );
};

HeartAddFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HeartAddFillIcon = withWrapper(HeartAddFillIconComponent);
export default HeartAddFillIcon;
