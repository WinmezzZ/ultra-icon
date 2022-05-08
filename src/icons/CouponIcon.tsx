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
const CouponIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 19.313V9h40v10.313a5.5 5.5 0 0 0-3.636 5.187A5.5 5.5 0 0 0 44 29.687V40H4V29.687A5.5 5.5 0 0 0 7.636 24.5 5.5 5.5 0 0 0 4 19.313Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m19 16 5 5 5-5m-11 6h12m-12 6.167h12M24 22v12"
      />
    </svg>
  );
};

CouponIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CouponIcon = withWrapper(CouponIconComponent);
export default CouponIcon;
