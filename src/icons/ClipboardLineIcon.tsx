/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ClipboardLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M7 4V2h10v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7zm0 2H5v14h14V6h-2v2H7V6zm2-2v2h6V4H9z" />
    </svg>
  );
};

ClipboardLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ClipboardLineIcon = withWrapper(ClipboardLineIconComponent);
export default ClipboardLineIcon;
