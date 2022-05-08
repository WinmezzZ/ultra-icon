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
const CourtIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 36h20V12H4v24h20Zm0 0v-8m0-16v8"
      />
      <circle cx={24} cy={24} r={4} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M11 24a4 4 0 0 1-4 4H4v-8h3a4 4 0 0 1 4 4Zm26 0a4 4 0 0 0 4 4h3v-8h-3a4 4 0 0 0-4 4Z"
      />
    </svg>
  );
};

CourtIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CourtIcon = withWrapper(CourtIconComponent);
export default CourtIcon;
