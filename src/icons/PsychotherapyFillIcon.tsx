/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const PsychotherapyFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M11 2a8.002 8.002 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17a2 2 0 0 1-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0 1 11 2zm0 5a1 1 0 0 0-1 1v.999L9 9a1 1 0 0 0 0 2l1-.001V12a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1V8a1 1 0 0 0-1-1z" />
    </svg>
  );
};

PsychotherapyFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PsychotherapyFillIcon = withWrapper(PsychotherapyFillIconComponent);
export default PsychotherapyFillIcon;
