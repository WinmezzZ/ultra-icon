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
const GuideBoardIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g stroke="#000" strokeWidth={4}>
          <path strokeLinecap="round" d="M24 4v37" />
          <path fill="null" fillRule="nonzero" d="M24 8h15.545L42 12l-2.455 4H24zm0 14H8.455L6 26l2.455 4H24z" />
          <path strokeLinecap="round" d="M16 42h16" />
        </g>
      </g>
    </svg>
  );
};

GuideBoardIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const GuideBoardIcon = withWrapper(GuideBoardIconComponent);
export default GuideBoardIcon;
