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
const TraditionalChineseMedicineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 43h5.955c.083-2.737.484-4.242 1.204-4.515C38.669 35.635 44 28.434 44 20H4c0 8.251 5.103 15.323 12.357 18.294.758.31 1.325 1.88 1.699 4.706H24Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={4}
        d="M14.443 27.022c.36 1.188.836 2.169 1.427 2.943a11.253 11.253 0 0 0 2.14 2.104"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M25.214 20.026a3306.427 3306.427 0 0 0 6.622-13.708c1.05-2.21 3.18-2.742 5.145-1.902 1.965.84 2.76 3.242 1.935 4.917-.51 1.034-2.24 4.591-5.19 10.67"
      />
    </svg>
  );
};

TraditionalChineseMedicineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TraditionalChineseMedicineIcon = withWrapper(TraditionalChineseMedicineIconComponent);
export default TraditionalChineseMedicineIcon;
