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
const StackLightIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M17 4h14v30H17z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M17 14h14M17 24h14M6.879 7.879l4.242 4.242m-4.242 21 4.242-4.242m30-21L36.88 12.12m4.241 21.001L36.88 28.88M4 21h6m28 0h6"
      />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M20 34h8v10h-8z" />
    </svg>
  );
};

StackLightIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const StackLightIcon = withWrapper(StackLightIconComponent);
export default StackLightIcon;
