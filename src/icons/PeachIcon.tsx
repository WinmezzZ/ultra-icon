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
const PeachIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M10.077 13.431C15.047 7.87 23.687 10.315 27 12c1.657-.632 6.197-1.357 9.18.665 3.727 2.528 8.423 9.239 4.074 18.719C36.775 38.968 27.69 42.157 24.376 43c-2.485-1.053-7.946-3.168-13.77-8.448-5.28-4.788-6.741-14.169-.529-21.12Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M27 12c-1.924.75-5.772 2.25-7.87 6.75-2.256 4.836-.525 9 0 11.25"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M21 4c.333.167 2.5.5 3 2.5.437 1.749-.333 2.833-.5 4"
      />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M28.479 11.328a1.477 1.477 0 0 1-1.416-1.807c.27-1.287.882-3.044 2.266-4.129 1.384-1.084 3.237-1.259 4.551-1.213a1.477 1.477 0 0 1 1.417 1.807c-.27 1.288-.883 3.045-2.267 4.13-1.384 1.084-3.236 1.258-4.551 1.212Z"
      />
    </svg>
  );
};

PeachIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PeachIcon = withWrapper(PeachIconComponent);
export default PeachIcon;
