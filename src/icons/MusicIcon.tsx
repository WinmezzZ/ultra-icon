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
const MusicIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M30 34.5a3.5 3.5 0 0 1 3.5-3.5H41v3.4a3.6 3.6 0 0 1-3.6 3.6h-3.9a3.5 3.5 0 0 1-3.5-3.5Zm-24 4A3.5 3.5 0 0 1 9.5 35H16v3.4a3.6 3.6 0 0 1-3.6 3.6H9.5A3.5 3.5 0 0 1 6 38.5Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 18.044v0l25-5.919M16 38V10l25-6v29.692"
      />
    </svg>
  );
};

MusicIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MusicIcon = withWrapper(MusicIconComponent);
export default MusicIcon;
