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
const IcecreamOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M17 4h14l3 28H14l3-28Zm4 28v9a3 3 0 0 0 3 3v0a3 3 0 0 0 3-3v-9"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 14v0a5.657 5.657 0 0 0 8 0v0a5.657 5.657 0 0 1 8 0v0m-17 8v0a6.042 6.042 0 0 0 8.76.716L24 22.5l.24-.216A6.042 6.042 0 0 1 33 23v0"
      />
    </svg>
  );
};

IcecreamOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const IcecreamOneIcon = withWrapper(IcecreamOneIconComponent);
export default IcecreamOneIcon;
