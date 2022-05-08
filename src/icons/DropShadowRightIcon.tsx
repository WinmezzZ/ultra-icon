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
const DropShadowRightIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M21 40a15.95 15.95 0 0 0 11.314-4.686A15.95 15.95 0 0 0 37 24a15.95 15.95 0 0 0-4.686-11.314A15.95 15.95 0 0 0 21 8a15.95 15.95 0 0 0-11.314 4.686A15.95 15.95 0 0 0 5 24a15.95 15.95 0 0 0 4.686 11.314A15.95 15.95 0 0 0 21 40Z"
        clipRule="evenodd"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M36.556 39.556A21.932 21.932 0 0 0 43 24a21.932 21.932 0 0 0-6.444-15.556"
      />
    </svg>
  );
};

DropShadowRightIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DropShadowRightIcon = withWrapper(DropShadowRightIconComponent);
export default DropShadowRightIcon;
