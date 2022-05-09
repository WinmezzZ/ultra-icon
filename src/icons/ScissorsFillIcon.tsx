/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ScissorsFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M9.683 7.562 12 9.88l6.374-6.375a2 2 0 0 1 2.829 0l.707.707L9.683 16.438a4 4 0 1 1-2.121-2.121L9.88 12 7.562 9.683a4 4 0 1 1 2.121-2.121zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm9.535-6.587 6.375 6.376-.707.707a2 2 0 0 1-2.829 0l-4.96-4.961 2.12-2.122z" />
    </svg>
  );
};

ScissorsFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ScissorsFillIcon = withWrapper(ScissorsFillIconComponent);
export default ScissorsFillIcon;
