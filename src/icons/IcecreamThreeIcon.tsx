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
const IcecreamThreeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeWidth={4}
        d="M14 14c0-5.523 4.477-10 10-10s10 4.477 10 10v17.73a.27.27 0 0 1-.27.27H14.27a.27.27 0 0 1-.27-.27V14Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M21 32v9a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v-9M14 16v0a7.071 7.071 0 0 0 10 0v0a7.071 7.071 0 0 1 10 0v0"
      />
    </svg>
  );
};

IcecreamThreeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const IcecreamThreeIcon = withWrapper(IcecreamThreeIconComponent);
export default IcecreamThreeIcon;
