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
const CakeTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M40 17.9 31.058 8 9 17.9V30h31V17.9Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M9 18h17.386c.063 0 .114.051.114.114v3.511a2.875 2.875 0 0 0 2.875 2.875v0a2.875 2.875 0 0 0 2.875-2.875v-3.511c0-.063.051-.114.114-.114H40"
      />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M9.5 23.957c-.602.3-1.162.62-1.678.956C5.418 26.481 4 28.412 4 30.5c0 5.247 8.954 9.5 20 9.5s20-4.253 20-9.5c0-2.14-1.488-4.113-4-5.7"
      />
    </svg>
  );
};

CakeTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CakeTwoIcon = withWrapper(CakeTwoIconComponent);
export default CakeTwoIcon;
