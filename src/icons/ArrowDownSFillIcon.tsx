/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ArrowDownSFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m12 16-6-6h12z" />
    </svg>
  );
};

ArrowDownSFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ArrowDownSFillIcon = withWrapper(ArrowDownSFillIconComponent);
export default ArrowDownSFillIcon;
