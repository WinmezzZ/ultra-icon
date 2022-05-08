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
const WorkbenchIconComponent = (p: SVGComponentProps) => {
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
          d="M12 33H4V7h40v26h-8z"
        />
        <path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 22v4" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 33v6" />
        <path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 18v8m8-12v12" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 41h24" />
      </g>
    </svg>
  );
};

WorkbenchIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WorkbenchIcon = withWrapper(WorkbenchIconComponent);
export default WorkbenchIcon;
