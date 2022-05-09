/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const VoiceRecognitionLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8-9v12h-2V6h2zM9 9v6H7V9h2zm8 0v6h-2V9h2zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z" />
    </svg>
  );
};

VoiceRecognitionLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const VoiceRecognitionLineIcon = withWrapper(VoiceRecognitionLineIconComponent);
export default VoiceRecognitionLineIcon;
