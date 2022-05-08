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
const MindMappingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M8 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M42 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 6H20v36h12M12 24h20" />
    </svg>
  );
};

MindMappingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MindMappingIcon = withWrapper(MindMappingIconComponent);
export default MindMappingIcon;
