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
const AnalysisIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M44 5H4v12h40V5Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m4 41.03 12.176-12.3 6.579 6.3L30.798 27l4.48 4.368"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M44 16.172v26m-40-26v14M13.016 43H44" />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M17 11h21m-28-.003h1" />
    </svg>
  );
};

AnalysisIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AnalysisIcon = withWrapper(AnalysisIconComponent);
export default AnalysisIcon;
