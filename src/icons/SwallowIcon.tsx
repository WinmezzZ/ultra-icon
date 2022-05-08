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
const SwallowIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m8.999 33.313 15.035-26.37C24.958 4.98 26.627 4 29.04 4c3.62 0 5.977 4.986 5.977 4.986L39 9.58c-4.01.065-6.33.872-6.957 2.42-.94 2.322 2.456 4.73 2.975 8.004.52 3.273-1.55 8.801-6.529 11.563-3.319 1.841-7.462 2.319-12.43 1.433l-6.1 11"
      />
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M18.942 27.978c2.58-4.65 4.275-7.635 5.087-8.957 1.219-1.982 6.245-1.384 4.44 3.563-1.204 3.298-4.38 5.096-9.527 5.394Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

SwallowIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SwallowIcon = withWrapper(SwallowIconComponent);
export default SwallowIcon;
