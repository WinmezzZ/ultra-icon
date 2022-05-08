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
const CircleFourIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 34a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm34 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24.197 15.744a8.99 8.99 0 0 0 7.438-3.931 14.528 14.528 0 0 1 4.686 4.498A8.995 8.995 0 0 0 32 24a8.997 8.997 0 0 0 4.527 7.812 14.53 14.53 0 0 1-4.426 4.532 8.998 8.998 0 0 0-7.905-4.694c-3.4 0-6.36 1.885-7.89 4.667a14.528 14.528 0 0 1-4.494-4.683 8.99 8.99 0 0 0 3.93-7.437 8.99 8.99 0 0 0-3.907-7.422 14.526 14.526 0 0 1 4.94-4.939 8.99 8.99 0 0 0 7.42 3.908Z"
      />
    </svg>
  );
};

CircleFourIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CircleFourIcon = withWrapper(CircleFourIconComponent);
export default CircleFourIcon;
