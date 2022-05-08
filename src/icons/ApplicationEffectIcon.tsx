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
const ApplicationEffectIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 40.833a11.955 11.955 0 0 0 8 3.056c6.627 0 12-5.373 12-12 0-5.301-3.437-9.8-8.204-11.387"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M27.171 27.499c.535 1.36.829 2.84.829 4.39 0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12 0-5.315 3.455-9.823 8.242-11.4"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 27.89c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12s-12 5.372-12 12c0 6.627 5.373 12 12 12Z"
      />
    </svg>
  );
};

ApplicationEffectIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ApplicationEffectIcon = withWrapper(ApplicationEffectIconComponent);
export default ApplicationEffectIcon;
