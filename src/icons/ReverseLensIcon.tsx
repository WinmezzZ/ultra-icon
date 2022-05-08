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
const ReverseLensIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M13 25V10h6l2-3h6l2 3h6v15H13Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m20 35 4 4-4 4" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32 38.168C39.064 36.625 45 33.1 45 29c0-2.252-1.488-4.33-4-6.001M24 39C12.954 39 3 34.523 3 29c0-2.252 1.488-4.33 4-6.001"
      />
      <path fill="null" stroke="#333" strokeMiterlimit={10} strokeWidth={4} d="M24 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
};

ReverseLensIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ReverseLensIcon = withWrapper(ReverseLensIconComponent);
export default ReverseLensIcon;
