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
const DropShadowLeftIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M27 40a15.95 15.95 0 0 0 11.314-4.686A15.95 15.95 0 0 0 43 24a15.95 15.95 0 0 0-4.686-11.314A15.95 15.95 0 0 0 27 8a15.95 15.95 0 0 0-11.314 4.686A15.95 15.95 0 0 0 11 24a15.95 15.95 0 0 0 4.686 11.314A15.95 15.95 0 0 0 27 40Z"
        clipRule="evenodd"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M11.444 8.444A21.931 21.931 0 0 0 5 24a21.931 21.931 0 0 0 6.444 15.556"
      />
    </svg>
  );
};

DropShadowLeftIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DropShadowLeftIcon = withWrapper(DropShadowLeftIconComponent);
export default DropShadowLeftIcon;
