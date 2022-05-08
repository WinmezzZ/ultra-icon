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
const BoxingOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M13 26h2c2.76 0 5-2.24 5-5s-2.24-5-5-5h-4c-2.76 0-5 2.24-5 5v9a6 6 0 0 0 6 6h24a6 6 0 0 0 6-6v-4a4 4 0 0 0-4-4H24m10 22H14a2 2 0 0 1-2-2v-6h24v6c0 1.1-.9 2-2 2Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M6 20c-1 0-2-2-2-4v-4c0-4.42 3.58-8 8-8h24c4.42 0 8 3.58 8 8v4c0 3.31-2.69 6-6 6H19.9"
      />
    </svg>
  );
};

BoxingOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BoxingOneIcon = withWrapper(BoxingOneIconComponent);
export default BoxingOneIcon;
