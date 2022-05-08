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
const ProjectorOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M21 21V10H10v11" />
      <rect width={40} height={16} x={4} y={21} fill="null" stroke="#000" strokeWidth={4} rx={2} />
      <rect width={4} height={4} x={14} y={27} fill="#fff" rx={2} />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M28 29h8" />
    </svg>
  );
};

ProjectorOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ProjectorOneIcon = withWrapper(ProjectorOneIconComponent);
export default ProjectorOneIcon;
