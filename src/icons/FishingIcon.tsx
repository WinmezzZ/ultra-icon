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
const FishingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20.987 34.552 12 29h27a3 3 0 1 1 0 6H22.564a3 3 0 0 1-1.577-.448Z"
      />
      <path stroke="#000" strokeMiterlimit={2} strokeWidth={4} d="M30 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M34 32c4-3 2.5-9.566 1.5-11.5-1-1.934-2.95-4.5-2.95-4.5s-1.05 0-2.05 1c-2.678 2.679-4.5 6-7 6s-6-2-6-2"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20 15c-3.596-4.496-6.385-6.566-12-6.938C6.899 7.989 6 8.895 6 10v18m1 15c4 0 2.938-2 6-2 3.063 0 2 2 5.5 2s2.5-2 6-2 2.938 2 6 2c3.063 0 1.5-2 5-2s2.563 2 6.5 2"
      />
    </svg>
  );
};

FishingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FishingIcon = withWrapper(FishingIconComponent);
export default FishingIcon;
