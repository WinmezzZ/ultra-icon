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
const BreadOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M9 26s8-12 13-18c3.13-3.757 9-5.25 14-3s7 7 5 11-10 19-10 19"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M31 33.188c0 3.152-1.756 5.97-4.514 7.838-2.166 1.468-4.95.841-7.986.841-3.201 0-6.122.528-8.333-1.085C7.609 38.917 6 36.206 6 33.188 6 26.812 11.596 23 18.5 23S31 27.561 31 33.188Z"
      />
      <path
        fill="null"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M23 33.217c0 .996-.632 1.885-1.625 2.476-.78.463-1.782.265-2.875.265-1.152 0-2.204.167-3-.343-.92-.589-1.5-1.445-1.5-2.398C14 31.204 16.015 30 18.5 30s4.5 1.44 4.5 3.217Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M15 18s3.5-1 8 0m-3-7s3.5-1.5 7 0"
      />
    </svg>
  );
};

BreadOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BreadOneIcon = withWrapper(BreadOneIconComponent);
export default BreadOneIcon;
