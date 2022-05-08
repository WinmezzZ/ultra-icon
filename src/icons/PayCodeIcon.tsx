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
const PayCodeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g strokeWidth={4}>
          <path fill="null" fillRule="nonzero" stroke="#000" d="M4 4h40v40H4z" />
          <path stroke="#FFF" strokeLinecap="round" d="M12 16v16m8-16v16m8-16v16m8-16v16" />
        </g>
      </g>
    </svg>
  );
};

PayCodeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PayCodeIcon = withWrapper(PayCodeIconComponent);
export default PayCodeIcon;
