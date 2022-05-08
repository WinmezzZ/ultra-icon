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
const VoiceOffIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M31 24V11a7 7 0 1 0-14 0v13a7 7 0 1 0 14 0Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M39 23a14.95 14.95 0 0 1-1.248 6M9 23c0 8.284 6.716 15 15 15 1.753 0 3.436-.3 5-.853M24 38v6m18-2L6 6"
      />
    </svg>
  );
};

VoiceOffIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const VoiceOffIcon = withWrapper(VoiceOffIconComponent);
export default VoiceOffIcon;
