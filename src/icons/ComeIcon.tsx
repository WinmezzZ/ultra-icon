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
const ComeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19 40C10.127 35.564 7 26 4 19.5c-1.35-2.924 3.526-3.69 6.5-2.5 2.5 1 5.5 3 5.5 3v-8.5a3.5 3.5 0 1 1 7 0v-2a3.5 3.5 0 1 1 7 0v4a3.5 3.5 0 1 1 7 0v3a3.5 3.5 0 0 1 7-.002V29c0 3.5-2 8-7 11-4.794 2.876-12 3-18 0Z"
      />
    </svg>
  );
};

ComeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ComeIcon = withWrapper(ComeIconComponent);
export default ComeIcon;
