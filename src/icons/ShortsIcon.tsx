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
const ShortsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M37 6H11v10L4 33l15 9 5-6 5 6 15-9-7-17V6Z"
      />
      <path fill="#fff" d="M11 14a2 2 0 1 0 0 4v-4Zm26 4a2 2 0 1 0 0-4v4Zm-26 0h26v-4H11v4Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M37 14v2l1.75 4.25M11 14v2l-1.75 4.25"
      />
    </svg>
  );
};

ShortsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ShortsIcon = withWrapper(ShortsIconComponent);
export default ShortsIcon;
