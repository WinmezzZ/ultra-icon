/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const CloudWindyFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M14 18v-3.993H2.074a8 8 0 0 1 14.383-6.908A5.5 5.5 0 1 1 17.5 18h-3.499zm-8 2h10v2H6v-2zm-4-4h10v2H2v-2z" />
    </svg>
  );
};

CloudWindyFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CloudWindyFillIcon = withWrapper(CloudWindyFillIconComponent);
export default CloudWindyFillIcon;
