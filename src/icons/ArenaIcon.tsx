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
const ArenaIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M44 26 24 36 4 26l20-10 20 10Z"
      />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="m24 7 20 10-20 10L4 17 24 7Z"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M44 26v8L24 44 4 34v-8l20 10 20-10Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M44 14v12M4 26V14m20 22V24m0-8V4"
      />
    </svg>
  );
};

ArenaIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ArenaIcon = withWrapper(ArenaIconComponent);
export default ArenaIcon;
