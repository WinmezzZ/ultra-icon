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
const LollipopIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M36.214 34.312A15.946 15.946 0 0 1 26 38a8.76 8.76 0 0 1-.692-.022 15.954 15.954 0 0 1-10.62-4.67 15.894 15.894 0 0 1-3.516-5.291A15.92 15.92 0 0 1 10 21.997c0-2.075.393-4.102 1.172-6.018a15.896 15.896 0 0 1 3.516-5.292 15.899 15.899 0 0 1 5.293-3.515A15.927 15.927 0 0 1 26 6c2.075 0 4.103.393 6.019 1.172a15.899 15.899 0 0 1 5.293 3.515 15.789 15.789 0 0 1 3.87 6.252 16.17 16.17 0 0 1 .692 7.078 16.209 16.209 0 0 1-.7 3.07c-1.025 3.02-2.364 5.066-4.96 7.225Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M22.105 19.489a3.472 3.472 0 0 1 3.703-3.216 4.097 4.097 0 0 1 2.842 1.416 4.113 4.113 0 0 1 1.007 3.01 4.953 4.953 0 0 1-1.705 3.421 4.98 4.98 0 0 1-3.628 1.211c-3.33-.234-5.855-3.132-5.621-6.464.284-4.06 3.82-7.133 7.882-6.849a8.987 8.987 0 0 1 6.194 3.086 8.966 8.966 0 0 1 2.199 6.56 11.043 11.043 0 0 1-3.8 7.61A11.024 11.024 0 0 1 23.903 32c-.263 0-.527-.008-.798-.025-2.788-.192-5.427-.738-7.604-2.475A13.542 13.542 0 0 1 11 23m3 11-8 8.485"
      />
    </svg>
  );
};

LollipopIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LollipopIcon = withWrapper(LollipopIconComponent);
export default LollipopIcon;
