/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Haze2FillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM17 7a5 5 0 0 1 0 10c-1.844 0-3.51-1.04-5-3.122C10.51 15.96 8.844 17 7 17A5 5 0 0 1 7 7c1.844 0 3.51 1.04 5 3.122C13.49 8.04 15.156 7 17 7zm-5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM4.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
    </svg>
  );
};

Haze2FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Haze2FillIcon = withWrapper(Haze2FillIconComponent);
export default Haze2FillIcon;
