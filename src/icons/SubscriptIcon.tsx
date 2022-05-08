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
const SubscriptIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="#333"
        d="M238.763 170.667 448 423.595l209.237-252.928H768L503.381 490.539 768 810.41v.256H657.493L448 557.483 238.507 810.667H128v-.256l264.619-319.872L128 170.667h110.763zm680.704 536.746a34.133 34.133 0 1 0-56.32-15.36l-49.28 14.08A85.376 85.376 0 0 1 896 597.333a85.333 85.333 0 0 1 58.581 147.371l-69.504 65.963h96.256v42.666H810.667v-42.666l108.8-103.254z"
      />
    </svg>
  );
};

SubscriptIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SubscriptIcon = withWrapper(SubscriptIconComponent);
export default SubscriptIcon;
