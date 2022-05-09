/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const FolderKeyholeLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m10.414 3 2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zm-.828 2H4v14h16V7h-8.414l-2-2zM12 9a2 2 0 0 1 1.001 3.732L13 17h-2v-4.268A2 2 0 0 1 12 9z" />
    </svg>
  );
};

FolderKeyholeLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FolderKeyholeLineIcon = withWrapper(FolderKeyholeLineIconComponent);
export default FolderKeyholeLineIcon;
