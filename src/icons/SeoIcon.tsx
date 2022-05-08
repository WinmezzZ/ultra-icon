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
const SeoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect width={40} height={32} x={4} y={8} fill="null" stroke="#000" strokeWidth={4} rx={1.633} />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 18.948c-2-2.948-5.502-1.01-5.251 2.02C11 24 15 24 15.249 27.032 15.5 30.063 12 32 10 29.052M26 18h-4v13h4m-4-6h4"
      />
      <rect
        width={6}
        height={13}
        x={32}
        y={18}
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={3}
      />
    </svg>
  );
};

SeoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SeoIcon = withWrapper(SeoIconComponent);
export default SeoIcon;
