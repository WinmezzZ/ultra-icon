/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const RepeatFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M6 4h15a1 1 0 0 1 1 1v7h-2V6H6v3L1 5l5-4v3zm12 16H3a1 1 0 0 1-1-1v-7h2v6h14v-3l5 4-5 4v-3z" />
    </svg>
  );
};

RepeatFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RepeatFillIcon = withWrapper(RepeatFillIconComponent);
export default RepeatFillIcon;
