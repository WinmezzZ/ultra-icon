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
const RecyclingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M33.526 19.5 25.793 6.105c-.783-1.356-2.75-1.327-3.493.052L17 16m8 24h16.42c1.566 0 2.524-1.716 1.704-3.048L37 27m-24-4L4.773 36.986C3.989 38.319 4.95 40 6.497 40H17"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m29 36-4 4 4 4m-1-25.8 5.464 1.465 1.464-5.465M7.5 24.464 12.964 23l1.464 5.464"
      />
    </svg>
  );
};

RecyclingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RecyclingIcon = withWrapper(RecyclingIconComponent);
export default RecyclingIcon;
