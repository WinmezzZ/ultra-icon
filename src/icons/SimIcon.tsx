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
const SimIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g strokeWidth={4}>
          <path fill="null" fillRule="nonzero" stroke="#000" d="M8 4h24.889L40 11.273V44H8z" />
          <path fill="null" fillRule="nonzero" stroke="#FFF" d="M15 26h18v10H15z" />
          <path stroke="#FFF" strokeLinecap="round" d="M15 12v6m6-6v6m6-6v6" />
        </g>
      </g>
    </svg>
  );
};

SimIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SimIcon = withWrapper(SimIconComponent);
export default SimIcon;
