/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SimCard2FillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 16v-8H8v2h3v6h2zm-5-5v2h2v-2H8zm6 0v2h2v-2h-2zm0-3v2h2v-2h-2zm-6 6v2h2v-2H8zm6 0v2h2v-2h-2z" />
    </svg>
  );
};

SimCard2FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SimCard2FillIcon = withWrapper(SimCard2FillIconComponent);
export default SimCard2FillIcon;
