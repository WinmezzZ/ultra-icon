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
const BaokemengIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M44 24H30c0-3.31-2.69-6-6-6s-6 2.69-6 6H4C4 12.95 12.95 4 24 4s20 8.95 20 20Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M18 24H4c0 11.05 8.95 20 20 20s20-8.95 20-20H30"
      />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M24 30a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      />
    </svg>
  );
};

BaokemengIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BaokemengIcon = withWrapper(BaokemengIconComponent);
export default BaokemengIcon;
