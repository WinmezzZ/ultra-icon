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
const ShieldIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          fillRule="nonzero"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M6 8.256 24.009 3 42 8.256v10.778A26.316 26.316 0 0 1 24.003 44 26.32 26.32 0 0 1 6 19.029V8.256Z"
        />
      </g>
    </svg>
  );
};

ShieldIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ShieldIcon = withWrapper(ShieldIconComponent);
export default ShieldIcon;
