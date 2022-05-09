/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const FolderShieldFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM8 9v4.904c0 .892.446 1.724 1.187 2.219L12 17.998l2.813-1.875A2.667 2.667 0 0 0 16 13.904V9H8zm2 4.904V11h4v2.904a.667.667 0 0 1-.297.555L12 15.594l-1.703-1.135a.667.667 0 0 1-.297-.555z" />
    </svg>
  );
};

FolderShieldFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FolderShieldFillIcon = withWrapper(FolderShieldFillIconComponent);
export default FolderShieldFillIcon;
