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
const GoldMedalTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        d="M36 32a11.97 11.97 0 0 0-4-8.944A11.955 11.955 0 0 0 24 20a11.955 11.955 0 0 0-8 3.056A11.97 11.97 0 0 0 12 32c0 6.627 5.373 12 12 12s12-5.373 12-12Z"
      />
      <path fill="null" d="M16 4h16v19.056A11.955 11.955 0 0 0 24 20a11.955 11.955 0 0 0-8 3.056V4Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 4h16M16 4H8v10l8 6m0-16v16M32 4h8v10l-8 6m0-16v16m-16 3.056A11.955 11.955 0 0 1 24 20c3.073 0 5.877 1.155 8 3.056m-16 0A11.97 11.97 0 0 0 12 32c0 6.627 5.373 12 12 12s12-5.373 12-12a11.97 11.97 0 0 0-4-8.944m-16 0V20m16 3.056V20"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32 4h8v10l-8 6M16 4H8v10l8 6"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M36 32a11.97 11.97 0 0 0-4-8.944A11.955 11.955 0 0 0 24 20a11.955 11.955 0 0 0-8 3.056A11.97 11.97 0 0 0 12 32c0 6.627 5.373 12 12 12s12-5.373 12-12Z"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 4h16v19.056A11.955 11.955 0 0 0 24 20a11.955 11.955 0 0 0-8 3.056V4Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 37V27l-2 1m2 9h2m-2 0h-2"
      />
    </svg>
  );
};

GoldMedalTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const GoldMedalTwoIcon = withWrapper(GoldMedalTwoIconComponent);
export default GoldMedalTwoIcon;
