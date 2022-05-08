/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const MicrophoneOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M15 26.314s4.596-.354 7.778-3.536C25.96 19.596 26.314 15 26.314 15l7.752 12.182a4.986 4.986 0 0 1-6.884 6.884L15 26.314Z"
      />
      <circle cx={15} cy={15} r={11} stroke="#000" strokeWidth={4} />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m5.657 25.456 19.799-19.8M34 33l8 8h-9"
      />
    </svg>
  );
};

MicrophoneOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MicrophoneOneIcon = withWrapper(MicrophoneOneIconComponent);
export default MicrophoneOneIcon;
