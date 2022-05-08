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
const RecentViewsSortIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M6 5v25h36V5M30 37l-6 6-6-6m6-7v13"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 21c4.05 0 7.717-2 11-6-3.283-4-6.95-6-11-6s-7.717 2-11 6c3.283 4 6.95 6 11 6Z"
      />
      <path fill="#fff" d="M24 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
};

RecentViewsSortIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RecentViewsSortIcon = withWrapper(RecentViewsSortIconComponent);
export default RecentViewsSortIcon;
