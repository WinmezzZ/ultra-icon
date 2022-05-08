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
const FlaskIconComponent = (p: SVGComponentProps) => {
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
          d="M37.845 35.022 44 41.316V44H4v-2.684l6.118-6.257z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10.104 35.074 18 27V6h12v21l7.873 8.05M11 35h26m-7-21h-6m6 6h-6"
        />
      </g>
    </svg>
  );
};

FlaskIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FlaskIcon = withWrapper(FlaskIconComponent);
export default FlaskIcon;
