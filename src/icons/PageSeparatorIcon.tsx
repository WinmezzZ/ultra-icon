/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const PageSeparatorIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M17 21v-4H7v4H5v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5h-2zM7 3v4h10V3h2v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3h2zM2 9l4 3-4 3V9zm20 0v6l-4-3 4-3z" />
    </svg>
  );
};

PageSeparatorIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PageSeparatorIcon = withWrapper(PageSeparatorIconComponent);
export default PageSeparatorIcon;
