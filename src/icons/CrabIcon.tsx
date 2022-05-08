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
const CrabIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M5 17C5 12 6 2 17 6c.946 3.782-2 11-12 11Zm38 0c0-5-1-15-12-11-.946 3.782 2 11 12 11Z"
      />
      <rect
        width={32}
        height={20}
        x={8}
        y={22}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={10}
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M27 22v-4m-6 4v-4m22-1c1 3 1 9-3 12M5 17c-1 3 0 8 3 12m22 13h14l-4-9m-22 9H4l4-9"
      />
    </svg>
  );
};

CrabIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CrabIcon = withWrapper(CrabIconComponent);
export default CrabIcon;
