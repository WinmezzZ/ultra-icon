/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const StackOverflowLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M18 20.002V15h2v7.002H4V15h2v5.002h12zM7.5 18v-2h9v2h-9zm.077-4.38.347-1.97 8.864 1.563-.348 1.97-8.863-1.563zm1.634-5.504 1-1.732 7.794 4.5-1 1.732-7.794-4.5zm3.417-4.613 1.532-1.286 5.785 6.895-1.532 1.285-5.785-6.894z" />
    </svg>
  );
};

StackOverflowLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const StackOverflowLineIcon = withWrapper(StackOverflowLineIconComponent);
export default StackOverflowLineIcon;
