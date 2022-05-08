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
const OutdoorIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g fill="null" fillRule="nonzero" stroke="#000" strokeWidth={4} transform="translate(4 4)">
          <path d="M0 38 14 6l10 24 4-12 12 20z" />
          <circle cx={33} cy={5} r={5} />
        </g>
      </g>
    </svg>
  );
};

OutdoorIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const OutdoorIcon = withWrapper(OutdoorIconComponent);
export default OutdoorIcon;
