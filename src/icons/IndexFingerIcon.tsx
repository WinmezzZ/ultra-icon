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
const IndexFingerIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M12.566 26.183C10.856 27.354 10 29.293 10 32c0 4.06 4.975 11 9.462 11h11.48C35.331 43 38 39.15 38 36.06V23.01a3 3 0 0 0-3-3h-.01A2.99 2.99 0 0 0 32 23"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M13.981 28.445V8.006a2.998 2.998 0 0 1 2.998-2.998h.008a3.014 3.014 0 0 1 3.006 3.015v15.57"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19.993 23.009v-3.993a3.016 3.016 0 0 1 6.03 0v3.993"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M26 22.716v-2.712a3 3 0 1 1 6 0v3"
      />
    </svg>
  );
};

IndexFingerIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const IndexFingerIcon = withWrapper(IndexFingerIconComponent);
export default IndexFingerIcon;
