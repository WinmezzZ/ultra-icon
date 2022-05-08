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
const WingsuitFlyingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="null" stroke="#000" strokeMiterlimit={2} strokeWidth={4} d="M24 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M24 20c-8.71 0-16 7.28-16 16h7v8h18v-8h7c.01-8.71-7.29-16-16-16Zm-9 16V23m18 13V23m-9 21V20"
      />
    </svg>
  );
};

WingsuitFlyingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WingsuitFlyingIcon = withWrapper(WingsuitFlyingIconComponent);
export default WingsuitFlyingIcon;
