/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const InboxArchiveLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm16 6H4v10h16V9zm-.236-2-1-2H5.237l-1 2h15.527zM13 14h3l-4 4-4-4h3v-4h2v4z" />
    </svg>
  );
};

InboxArchiveLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const InboxArchiveLineIcon = withWrapper(InboxArchiveLineIconComponent);
export default InboxArchiveLineIcon;
