/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Html5FillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m12 18.178 4.62-1.256.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866-2.52.667-2.52-.667-.158-1.844h-2.27l.329 3.544L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2z" />
    </svg>
  );
};

Html5FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Html5FillIcon = withWrapper(Html5FillIconComponent);
export default Html5FillIcon;
