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
const EnquireIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M37 16a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm-25-4a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m26 39 6-5v-6c0-3.466 2-6 5-6s5 2.534 5 6v14m-18-9-6-5v-4c0-3.466-2-6-5-6s-5 2.534-5 6v18"
      />
    </svg>
  );
};

EnquireIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const EnquireIcon = withWrapper(EnquireIconComponent);
export default EnquireIcon;
