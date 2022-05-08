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
const SlideIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g strokeLinejoin="round" strokeWidth={4}>
          <path fill="null" fillRule="nonzero" stroke="#000" d="M7 5.5h34v28H7z" />
          <path stroke="#000" strokeLinecap="round" d="m16 41.5 8-8 8 8" />
          <path stroke="#FFF" strokeLinecap="round" d="m13.924 24.663 5.642-5.508 4.442 4.345 9.959-9.98" />
          <path stroke="#000" strokeLinecap="round" d="M4 5.5h40" />
        </g>
      </g>
    </svg>
  );
};

SlideIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SlideIcon = withWrapper(SlideIconComponent);
export default SlideIcon;
