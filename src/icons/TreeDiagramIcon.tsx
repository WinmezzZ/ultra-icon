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
const TreeDiagramIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle cx={10} cy={24} r={4} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={38} cy={10} r={4} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={38} cy={24} r={4} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={38} cy={38} r={4} fill="null" stroke="#000" strokeWidth={4} />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M34 38H22V10h12M14 24h20" />
    </svg>
  );
};

TreeDiagramIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TreeDiagramIcon = withWrapper(TreeDiagramIconComponent);
export default TreeDiagramIcon;
