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
const BeerMugIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 37.241C16 39.172 16.857 44 28 44s12-4.828 12-6.759V16H16v21.241Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M25 23v14m6-14v14" />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M15.998 16s-1.999-4.5 1-7C19.999 6.5 23 8 23 8s1-4 5-4 5 4 5 4 3.5-1.5 6 1 .998 7 .998 7M16 19H6s1 10 2 13c.998 3 8 2 8 2"
      />
    </svg>
  );
};

BeerMugIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BeerMugIcon = withWrapper(BeerMugIconComponent);
export default BeerMugIcon;
