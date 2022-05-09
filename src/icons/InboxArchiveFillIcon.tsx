/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const InboxArchiveFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm9 11v-4h-2v4H8l4 4 4-4h-3zm6.764-7-1-2H5.237l-1 2h15.527z" />
    </svg>
  );
};

InboxArchiveFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const InboxArchiveFillIcon = withWrapper(InboxArchiveFillIconComponent);
export default InboxArchiveFillIcon;
