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
const ChafingDishIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 42c-9.941 0-18-8.059-18-18S14.059 6 24 6"
      />
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6c0 0-4 2-4 9s8 11 8 18-4 9-4 9Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M42 20h2v8h-2M6 20H4v8h2" />
    </svg>
  );
};

ChafingDishIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ChafingDishIcon = withWrapper(ChafingDishIconComponent);
export default ChafingDishIcon;
