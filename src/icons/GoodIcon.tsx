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
const GoodIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M8.007 19.197C12.443 10.325 22 7 28.507 4.197c2.957-1.274 3.689 3.526 2.5 6.5-1 2.5-3 5.303-3 5.303h8.5a3.5 3.5 0 1 1 0 7h2a3.5 3.5 0 1 1 0 7h-4a3.5 3.5 0 1 1 0 7h-3a3.5 3.5 0 0 1 .001 7H19.007c-3.5 0-8-1.803-11-6.803-2.876-4.794-3-12 0-18Z"
      />
    </svg>
  );
};

GoodIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const GoodIcon = withWrapper(GoodIconComponent);
export default GoodIcon;
