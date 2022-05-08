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
const MicroSlrCameraIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        d="M44 26c0 2.64-.73 5.108-2 7.215A14.073 14.073 0 0 1 37.215 38c-2.107 1.27-4.576 2-7.215 2-2.64 0-5.108-.73-7.215-2C18.719 35.55 16 31.093 16 26s2.72-9.55 6.785-12c2.107-1.27 4.576-2 7.215-2 2.64 0 5.108.73 7.215 2A14.073 14.073 0 0 1 42 18.785c1.27 2.107 2 4.576 2 7.215Z"
      />
      <path fill="null" d="M4 14v24h18.785C18.719 35.55 16 31.093 16 26s2.72-9.55 6.785-12H4Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M37.215 14c-2.107-1.27-4.576-2-7.215-2-2.64 0-5.108.73-7.215 2m14.43 0H42v4.785M37.215 14A14.073 14.073 0 0 1 42 18.785M22.785 14H4v24h18.785m0-24C18.719 16.45 16 20.907 16 26s2.72 9.55 6.785 12m14.43 0c-2.107 1.27-4.576 2-7.215 2-2.64 0-5.108-.73-7.215-2m14.43 0H42v-4.785M37.215 38A14.073 14.073 0 0 0 42 33.215m0-14.43c1.27 2.107 2 4.576 2 7.215 0 2.64-.73 5.108-2 7.215"
      />
      <path fill="null" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M8 9h9v5H8z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M10 22v8m26-4a6 6 0 0 1-6 6m-6-6a6 6 0 0 1 6-6"
      />
    </svg>
  );
};

MicroSlrCameraIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MicroSlrCameraIcon = withWrapper(MicroSlrCameraIconComponent);
export default MicroSlrCameraIcon;
