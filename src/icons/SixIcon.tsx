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
const SixIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19 41C13.5 38.25 8.001 30 5 25c-3-5 3.313-9.688 7-6l4 4v-5.5a3.5 3.5 0 1 1 7 0V16a3.5 3.5 0 1 1 7 0v1.5a3.5 3.5 0 1 1 7 0v-10a3.5 3.5 0 1 1 7 0v21.466c0 2.003-.37 4.008-1.455 5.691C41.263 36.645 39.112 39.303 36 41c-5.5 3-11.5 2.75-17 0Z"
      />
    </svg>
  );
};

SixIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SixIcon = withWrapper(SixIconComponent);
export default SixIcon;
