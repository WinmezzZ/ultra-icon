/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const EmotionLaughLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 7c2 0 3.667.333 5 1a5 5 0 0 1-10 0c1.333-.667 3-1 5-1zM8.5 7a2.5 2.5 0 0 1 2.45 2h-4.9A2.5 2.5 0 0 1 8.5 7zm7 0a2.5 2.5 0 0 1 2.45 2h-4.9a2.5 2.5 0 0 1 2.45-2z" />
    </svg>
  );
};

EmotionLaughLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const EmotionLaughLineIcon = withWrapper(EmotionLaughLineIconComponent);
export default EmotionLaughLineIcon;
