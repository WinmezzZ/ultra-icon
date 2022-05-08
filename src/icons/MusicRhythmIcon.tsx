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
const MusicRhythmIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M5 42h5m-5-6h5m-5-6h5m-5-6h5m6 18h5m-5-6h5m-5-6h5m-5-6h5m-5-6h5m-5-6h5m-5-6h5m6 36h5m6 0h5m-16-6h5m6 0h5m-16-6h5m6 0h5m-5-6h5m-5-6h5"
      />
    </svg>
  );
};

MusicRhythmIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MusicRhythmIcon = withWrapper(MusicRhythmIconComponent);
export default MusicRhythmIcon;
