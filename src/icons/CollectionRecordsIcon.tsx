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
const CollectionRecordsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M40 22c0-9.941-8.059-18-18-18S4 12.059 4 22s8.059 18 18 18"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M33.3 30c-1.822 0-3.3 1.722-3.3 3.846 0 3.845 3.9 7.34 6 8.154 2.1-.813 6-4.31 6-8.154C42 31.722 40.523 30 38.7 30c-1.116 0-2.103.646-2.7 1.634-.597-.988-1.584-1.634-2.7-1.634Z"
      />
      <path fill="null" stroke="#000" strokeWidth={4} d="M22 27a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    </svg>
  );
};

CollectionRecordsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CollectionRecordsIcon = withWrapper(CollectionRecordsIconComponent);
export default CollectionRecordsIcon;
