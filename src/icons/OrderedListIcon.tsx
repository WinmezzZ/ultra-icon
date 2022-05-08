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
const OrderedListIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M9 4v9m3 0H6m6 14H6m0-7s3-3 5 0-5 7-5 7m0 7.5s2-3 5-1 0 4.5 0 4.5 3 2.5 0 4.5-5-1-5-1m5-3.5H9M9 4 6 6m15 18h22M21 38h22M21 10h22"
      />
    </svg>
  );
};

OrderedListIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const OrderedListIcon = withWrapper(OrderedListIconComponent);
export default OrderedListIcon;
