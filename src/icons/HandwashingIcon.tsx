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
const HandwashingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 24h7v20H4z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32 16c-1.5-3.5 4-10 4-10s5.5 6.5 4 10-6.5 3.5-8 0Zm-1 26.5c-9 0-16-2.5-20-2.5V30c7 0 6.5-2.5 11-4s8 0 7.5 3-5.5 6-5.5 6c8 0 8-2 12-5s8-2 8 1-4 11.5-13 11.5Z"
      />
    </svg>
  );
};

HandwashingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HandwashingIcon = withWrapper(HandwashingIconComponent);
export default HandwashingIcon;
