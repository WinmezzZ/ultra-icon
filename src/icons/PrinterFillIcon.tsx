/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const PrinterFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M7 17h10v5H7v-5zm12 3v-5H5v5H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2zM5 10v2h3v-2H5zm2-8h10a1 1 0 0 1 1 1v3H6V3a1 1 0 0 1 1-1z" />
    </svg>
  );
};

PrinterFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PrinterFillIcon = withWrapper(PrinterFillIconComponent);
export default PrinterFillIcon;
