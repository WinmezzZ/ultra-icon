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
const ShareSysIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M10.365 41.632A19.946 19.946 0 0 1 4 27C4 15.954 12.954 7 24 7s20 8.954 20 20a19.945 19.945 0 0 1-6.365 14.632"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M15.137 36.51A12.965 12.965 0 0 1 11 27c0-7.18 5.82-13 13-13s13 5.82 13 13a12.96 12.96 0 0 1-4.138 9.51"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19.91 31.39a6 6 0 1 1 8.18 0"
      />
    </svg>
  );
};

ShareSysIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ShareSysIcon = withWrapper(ShareSysIconComponent);
export default ShareSysIcon;
