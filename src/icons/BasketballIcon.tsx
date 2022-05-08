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
const BasketballIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g stroke="#000" strokeWidth={4} transform="translate(4 4)">
          <circle cx={20} cy={20} r={20} />
          <path d="M4.545 7.273C8.788 10.909 10.91 15.152 10.91 20c0 4.848-2.121 9.09-6.364 12.727m30.909 0C31.212 29.091 29.09 24.848 29.09 20c0-4.848 2.121-9.09 6.364-12.727h0M0 20h40M20 0v40" />
        </g>
      </g>
    </svg>
  );
};

BasketballIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BasketballIcon = withWrapper(BasketballIconComponent);
export default BasketballIcon;
