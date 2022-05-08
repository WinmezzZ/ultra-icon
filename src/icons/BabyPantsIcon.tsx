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
const BabyPantsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 4H14c-2 1-5 5-5 15 0 12.5 5 25 8 25 2 0 2-2.5 2-2.5V24c0-5 8-4.5 8 0v11c0 8 7 11 9 9s-2-4-2-7c0-5 4-9 4-22 0-5-2.333-9-4-11Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M10 12h27" />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M10.803 8c-.732 1.696-1.337 3.981-1.624 7M38 15a16.91 16.91 0 0 0-1.124-6"
      />
    </svg>
  );
};

BabyPantsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BabyPantsIcon = withWrapper(BabyPantsIconComponent);
export default BabyPantsIcon;
