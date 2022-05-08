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
const CupIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M8 17.012C8 16.453 8.453 16 9.012 16h23.976c.559 0 1.012.453 1.012 1.012V31c0 7.18-5.82 13-13 13S8 38.18 8 31V17.012Z"
      />
      <path fill="null" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M8 23h26v8H8z" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M21 4v6m-8-4v2m16-2v2" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M34 34a7 7 0 1 0 0-14" />
    </svg>
  );
};

CupIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CupIcon = withWrapper(CupIconComponent);
export default CupIcon;
