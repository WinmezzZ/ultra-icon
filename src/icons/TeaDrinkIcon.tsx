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
const TeaDrinkIconComponent = (p: SVGComponentProps) => {
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
        d="M2 20c0 12.15 6 22 18 22s18-9.85 18-22H2Z"
        clipRule="evenodd"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20 14V6m10 8v-4m-20 4v-4m26.19 20.623c.99-2.584 1.574-5.486 1.752-8.572.345-.034.698-.051 1.058-.051 3.866 0 7 2.015 7 4.5S42.866 31 39 31c-1 0-1.95-.135-2.81-.377Z"
      />
    </svg>
  );
};

TeaDrinkIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TeaDrinkIcon = withWrapper(TeaDrinkIconComponent);
export default TeaDrinkIcon;
