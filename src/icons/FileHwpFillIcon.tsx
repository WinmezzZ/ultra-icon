/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const FileHwpFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m16 2 5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16zM9.333 14.667H8V18h8v-1.333l-6.667-.001v-2zM12 14.333a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0 1.333a1.167 1.167 0 1 1 0 2.334 1.167 1.167 0 0 1 0-2.334zM12.667 6h-1.334v1.333H8v1.334h8V7.333h-3.334V6z" />
    </svg>
  );
};

FileHwpFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FileHwpFillIcon = withWrapper(FileHwpFillIconComponent);
export default FileHwpFillIcon;
