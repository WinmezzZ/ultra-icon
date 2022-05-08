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
const EndocrineIconComponent = (p: SVGComponentProps) => {
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
        d="M23.147 44C31.293 44 40 43.01 40 30.18c0-6.216-1.492-11.276-4.474-15.18-2.787 4.667-4.852 7-6.196 7-2.016 0 0-6.09-2.331-10.709-1.554-3.08-4.311-5.51-8.27-7.291.55 4.437.431 7.655-.357 9.655-1.184 3-11.22 8.255-10.314 17.28C8.965 39.96 15 44 23.147 44Z"
        clipRule="evenodd"
      />
      <path
        fill="null"
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M21.708 24.008c-3.805 3.459-5.427 6.66-4.865 9.603.483 2.534 2.406 3.765 3.854 4.163 1.123.307 3.067.48 4.803-1.067 1.84-1.639 1.107-3.968-1.56-6.85-1.126-1.215-1.87-3.165-2.232-5.849Z"
      />
    </svg>
  );
};

EndocrineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const EndocrineIcon = withWrapper(EndocrineIconComponent);
export default EndocrineIcon;
