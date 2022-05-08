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
const SignalStrengthIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M38.142 38.142c7.81-7.81 7.81-20.474 0-28.284-7.81-7.81-20.474-7.81-28.284 0-7.81 7.81-7.81 20.474 0 28.284m22.627-5.657c4.687-4.686 4.687-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97"
      />
      <path fill="null" d="M28 24a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 0v16m0 0h4m-4 0h-4"
      />
    </svg>
  );
};

SignalStrengthIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SignalStrengthIcon = withWrapper(SignalStrengthIconComponent);
export default SignalStrengthIcon;
