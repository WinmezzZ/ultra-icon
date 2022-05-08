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
const EyebrowIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 40c9.941 0 18-10 18-10s-8.059-10-18-10S6 30 6 30s8.059 10 18 10Z"
      />
      <path fill="null" stroke="#333" strokeLinejoin="round" strokeWidth={4} d="M24 34a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M28 6c-7 0-18 3.5-21 6s-1 7 1 6 15.2-5.8 20-7c4.8-1.2 11.667.833 14 2-2.333-2-7-7-14-7Z"
      />
    </svg>
  );
};

EyebrowIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const EyebrowIcon = withWrapper(EyebrowIconComponent);
export default EyebrowIcon;
