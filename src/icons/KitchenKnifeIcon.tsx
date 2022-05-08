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
const KitchenKnifeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M14 30v10c0 6 8 6 8 0V30m0 7h-8"
      />
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M14 6a2 2 0 0 1 2-2h16.635c.319 0 .632.075.888.265C34.542 5.025 37.198 7.582 38 14c.773 6.182-1.369 12.364-2.382 14.855-.288.71-.985 1.145-1.75 1.145H14V6Z"
      />
      <circle cx={22} cy={10} r={2} fill="#fff" />
    </svg>
  );
};

KitchenKnifeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const KitchenKnifeIcon = withWrapper(KitchenKnifeIconComponent);
export default KitchenKnifeIcon;
