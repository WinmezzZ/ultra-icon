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
const BrainIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4.667}
        d="M19.036 44c-.98-3.196-2.458-5.578-4.435-7.147-2.965-2.353-7.676-.89-9.416-3.318-1.74-2.428 1.219-6.892 2.257-9.526 1.039-2.634-3.98-3.565-3.394-4.313.39-.499 2.927-1.937 7.609-4.316C12.987 7.793 17.9 4 26.398 4 39.144 4 44 14.806 44 21.68c0 6.873-5.88 14.277-14.256 15.874-.749 1.09.331 3.24 3.24 6.447"
      />
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19.5 14.5c-.654 2.534-.46 4.314.583 5.338 1.042 1.025 2.818 1.695 5.328 2.01-.57 3.27.125 4.803 2.083 4.601 1.958-.202 3.135-1.015 3.53-2.44 3.06.86 4.719.14 4.976-2.16.385-3.45-1.475-6.201-2.238-6.201-.762 0-2.738-.093-2.738-1.148s-2.308-1.65-4.391-1.65-.83-1.405-3.69-.85c-1.907.37-3.055 1.203-3.443 2.5Z"
        clipRule="evenodd"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M30.5 25.5c-1.017.631-2.412 1.68-3 2.5-1.469 2.05-2.66 3.297-2.92 4.608"
      />
    </svg>
  );
};

BrainIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BrainIcon = withWrapper(BrainIconComponent);
export default BrainIcon;
