/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ParentFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M7 11a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm10.5 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1a4.5 4.5 0 0 1 4.5 4.5v.5h-9v-.5a4.5 4.5 0 0 1 4.5-4.5zM7 12a5 5 0 0 1 5 5v4H2v-4a5 5 0 0 1 5-5z" />
    </svg>
  );
};

ParentFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ParentFillIcon = withWrapper(ParentFillIconComponent);
export default ParentFillIcon;
