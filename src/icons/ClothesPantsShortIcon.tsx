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
const ClothesPantsShortIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m6 36 2-24h32l2 24H26.842L24 25l-2.842 11H6Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m24 12 3 7m-3-7-4 7.5" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M18 12h12" />
    </svg>
  );
};

ClothesPantsShortIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ClothesPantsShortIcon = withWrapper(ClothesPantsShortIconComponent);
export default ClothesPantsShortIcon;
