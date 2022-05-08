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
const AbdominalIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M7.9 5c2.837 3.02 4.256 6.94 4.256 11.764 0 7.236-6.157 12.774-7.187 16.736-.687 2.641-1.01 5.808-.97 9.5M39.256 5c-2.838 3.02-4.257 6.94-4.257 11.764C35 24 41.156 29.538 42.186 33.5c.687 2.641 1.01 5.808.97 9.5"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M6.244 30.837c6.525 4.13 12.45 6.195 17.777 6.195 5.326 0 10.959-2.065 16.898-6.195"
      />
      <path fill="#000" d="M24 31a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </svg>
  );
};

AbdominalIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AbdominalIcon = withWrapper(AbdominalIconComponent);
export default AbdominalIcon;
