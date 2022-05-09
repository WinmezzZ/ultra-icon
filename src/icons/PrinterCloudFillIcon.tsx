/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const PrinterCloudFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M10.566 17A4.737 4.737 0 0 0 10 19.25c0 1.023.324 1.973.877 2.75H7v-5h3.566zm6.934-4a3.5 3.5 0 0 1 3.5 3.5l-.001.103a2.75 2.75 0 0 1-.581 5.392L20.25 22h-5.5l-.168-.005a2.75 2.75 0 0 1-.579-5.392L14 16.5a3.5 3.5 0 0 1 3.5-3.5zM21 8a1 1 0 0 1 1 1l.001 4.346A5.482 5.482 0 0 0 17.5 11l-.221.004A5.503 5.503 0 0 0 12.207 15H5v5H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h18zM8 10H5v2h3v-2zm9-8a1 1 0 0 1 1 1v3H6V3a1 1 0 0 1 1-1h10z" />
    </svg>
  );
};

PrinterCloudFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PrinterCloudFillIcon = withWrapper(PrinterCloudFillIconComponent);
export default PrinterCloudFillIcon;
