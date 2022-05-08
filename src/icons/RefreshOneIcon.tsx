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
const RefreshOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect
        width={10}
        height={10}
        x={17}
        y={24.071}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
        transform="rotate(-45 17 24.071)"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M40.12 16c-2.945-5.927-9.06-10-16.129-10C16.924 6 10.945 10.073 8 16m0-8v8m6.78 0H8m0 16c2.945 5.927 9.061 10 16.129 10 7.067 0 13.046-4.073 15.991-10m0 8v-8m-6.78 0h6.78"
      />
    </svg>
  );
};

RefreshOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RefreshOneIcon = withWrapper(RefreshOneIconComponent);
export default RefreshOneIcon;
