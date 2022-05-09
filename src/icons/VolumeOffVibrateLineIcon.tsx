/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const VolumeOffVibrateLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m19.39 3.161 1.413 1.414-2.475 2.475 2.475 2.475L18.328 12l2.475 2.476-2.475 2.475 2.475 2.475-1.414 1.414-3.889-3.89 2.475-2.474L15.5 12l2.475-2.475L15.5 7.05l3.89-3.889zM13 19.945a.5.5 0 0 1-.817.387L6.89 15.999 3 16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1l2.584-.002-3.776-3.776 1.414-1.414L13 12.586v7.359zM7.584 9.998 4 10v4l3.603-.001L11 16.779v-3.365L7.584 9.998zm5.303-6.26a.5.5 0 0 1 .113.317v5.702l-2-2V7.22l-.296.241-1.421-1.42 2.9-2.373a.5.5 0 0 1 .704.07z" />
    </svg>
  );
};

VolumeOffVibrateLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const VolumeOffVibrateLineIcon = withWrapper(VolumeOffVibrateLineIconComponent);
export default VolumeOffVibrateLineIcon;
