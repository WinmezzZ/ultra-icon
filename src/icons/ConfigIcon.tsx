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
const ConfigIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g fill="null" fillRule="nonzero" strokeWidth={4} transform="translate(4 4)">
          <path stroke="#000" d="m20 0-6 6H6v8l-6 6 6 6v8h8l6 6 6-6h8v-8l6-6-6-6V6h-8z" />
          <circle cx={20} cy={20} r={6} stroke="#FFF" />
        </g>
      </g>
    </svg>
  );
};

ConfigIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ConfigIcon = withWrapper(ConfigIconComponent);
export default ConfigIcon;
