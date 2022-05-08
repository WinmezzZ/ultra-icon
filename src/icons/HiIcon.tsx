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
const HiIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M37 43H17.476a.257.257 0 0 1-.218-.121L7.86 27.727a4.095 4.095 0 1 1 7.011-4.23l2.462 4.194V8.576a3 3 0 0 1 3.522-2.955L37.52 8.563A3 3 0 0 1 40 11.517V40a3 3 0 0 1-3 3Z"
      />
    </svg>
  );
};

HiIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HiIcon = withWrapper(HiIconComponent);
export default HiIcon;
