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
const BadgeTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m16 44 8-4 8 4V24.944A11.955 11.955 0 0 1 24 28a11.955 11.955 0 0 1-8-3.056V44Z"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M36 16a11.97 11.97 0 0 1-4 8.944A11.955 11.955 0 0 1 24 28a11.955 11.955 0 0 1-8-3.056A11.97 11.97 0 0 1 12 16c0-6.627 5.373-12 12-12s12 5.373 12 12Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 21V11l-2 1m2 9h2m-2 0h-2"
      />
    </svg>
  );
};

BadgeTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BadgeTwoIcon = withWrapper(BadgeTwoIconComponent);
export default BadgeTwoIcon;
