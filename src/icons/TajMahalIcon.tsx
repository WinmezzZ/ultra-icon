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
const TajMahalIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 28H8a2 2 0 0 0-2 2v14m26-16h8a2 2 0 0 1 2 2v14"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20 24h8s5.166-5.678 4-9c-.755-2.15-2.438-3.34-4-5-1.562-1.66-4-4-4-4s-2.438 2.34-4 4c-1.562 1.66-3.245 2.85-4 5-1.166 3.322 4 9 4 9Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 44h40" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 24h16v20H16V24Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M24 34v10" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 4v3M10 24v4m28-4v4M20 44h8" />
    </svg>
  );
};

TajMahalIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TajMahalIcon = withWrapper(TajMahalIconComponent);
export default TajMahalIcon;
