/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const MacbookLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M4 5v11h16V5H4zm-2-.993C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007V18H2V4.007zM1 19h22v2H1v-2z" />
    </svg>
  );
};

MacbookLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MacbookLineIcon = withWrapper(MacbookLineIconComponent);
export default MacbookLineIcon;
