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
const SignalOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M38.142 38.142A19.937 19.937 0 0 0 44 24a19.937 19.937 0 0 0-5.858-14.142m-28.284 0A19.937 19.937 0 0 0 4 24a19.938 19.938 0 0 0 5.858 14.142M15.1 14.1A13.956 13.956 0 0 0 11 24a13.96 13.96 0 0 0 4.1 9.9m17.8 0A13.956 13.956 0 0 0 37 24a13.96 13.96 0 0 0-4.1-9.9"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 44V34m0-30v10" />
      <circle cx={24} cy={24} r={3} fill="#000" />
    </svg>
  );
};

SignalOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SignalOneIcon = withWrapper(SignalOneIconComponent);
export default SignalOneIcon;
