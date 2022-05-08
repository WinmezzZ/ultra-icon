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
const ThumbsDownIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20.38 29.4v7.2a5.4 5.4 0 0 0 5.4 5.4l7.2-16.2V6H12.064a3.6 3.6 0 0 0-3.6 3.06L5.98 25.26a3.6 3.6 0 0 0 3.6 4.14h10.8Z"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32.98 6h4.806a4.158 4.158 0 0 1 4.194 3.6v12.6c-.283 2.09-2.086 3.837-4.194 3.8H32.98V6Z"
      />
    </svg>
  );
};

ThumbsDownIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ThumbsDownIcon = withWrapper(ThumbsDownIconComponent);
export default ThumbsDownIcon;
