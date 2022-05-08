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
const TeethIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth={4}
        d="M13.117 5h.886c4.666.69 5.931 3.338 9.997 3.338S29.331 5.69 33.998 5h.502a9.5 9.5 0 0 1 9.5 9.5v.626c0 2.903-3.09 6.217-4 9.357-.965 3.334-1.626 6.06-1.82 8.911C37.725 40.075 35.447 43 33 43c-3.654 0-6.898-14.975-8.937-14.975C22.023 28.025 17.978 43 15 43c-1.817 0-4.17-1.075-5.054-9.606C9.594 30 9 27.941 8 24.483c-.88-3.04-3.848-6.672-4-9.932A9.127 9.127 0 0 1 13.117 5Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={4}
        d="m15.482 12.463 16.519 5.326m-16.519 0 16.519-5.326"
      />
    </svg>
  );
};

TeethIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TeethIcon = withWrapper(TeethIconComponent);
export default TeethIcon;
