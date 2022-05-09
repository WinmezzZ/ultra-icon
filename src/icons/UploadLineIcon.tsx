/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const UploadLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z" />
    </svg>
  );
};

UploadLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const UploadLineIcon = withWrapper(UploadLineIconComponent);
export default UploadLineIcon;
