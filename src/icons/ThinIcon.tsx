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
const ThinIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M33 25H15c-1.59 0-3.77-.23-5-1-3.65-2.31-4.34-7.37-2-11l6-9c3.93 8.43 16.04 8.42 20 0l6 9c2.34 3.63 1.64 8.69-2 11-1.23.78-3.41 1-5 1Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="m12 25 2.52 9.55c.87 3.38-.06 6.97-2.52 9.45m24-19-2.52 9.58c-.87 3.38.06 6.94 2.52 9.42m-12-2v-2"
      />
    </svg>
  );
};

ThinIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ThinIcon = withWrapper(ThinIconComponent);
export default ThinIcon;
