/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const H6IconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m21.097 8-2.598 4.5a4 4 0 1 1-3.453 1.981L18.788 8h2.309zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 10.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 18.5 14.5z" />
    </svg>
  );
};

H6IconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const H6Icon = withWrapper(H6IconComponent);
export default H6Icon;
