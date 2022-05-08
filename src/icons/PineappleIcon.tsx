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
const PineappleIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20.5 14.5C20 14 20 13.15 20 11c0-3.866 4-7 4-7s3 3.134 3 7c0 1.922 0 3-.5 3.5"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M17 17c-1.21-2.918-4.138-6.568-6-8 5.411-1.015 9.774 2.3 12 5m7 2c1.452-2.697 4.304-5.695 6-7-5.643-1.058-9.871 2.261-12 5"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16.725 17.374A38.81 38.81 0 0 0 15 19c-4.19 4.19-4.898 11.864-4.997 15.28-.034 1.15-.026 2.322.409 3.387C10.879 38.81 11.875 40.406 14 42c4 3 16 3 20 0 2.116-1.587 3.112-3.175 3.581-4.318.441-1.074.45-2.258.415-3.419-.1-3.425-.812-11.08-4.996-15.263-.6-.6-1.176-1.14-1.726-1.626-4.258-3.767-10.291-3.767-14.55 0ZM32 18 11 29m5-11 21 11m-2 12L11 27m26 0L13 41"
      />
    </svg>
  );
};

PineappleIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PineappleIcon = withWrapper(PineappleIconComponent);
export default PineappleIcon;
