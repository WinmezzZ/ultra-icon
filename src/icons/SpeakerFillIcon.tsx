/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SpeakerFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
};

SpeakerFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SpeakerFillIcon = withWrapper(SpeakerFillIconComponent);
export default SpeakerFillIcon;
