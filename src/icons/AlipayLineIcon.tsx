/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const AlipayLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M18.408 16.79c-2.173-.95-3.72-1.646-4.64-2.086-1.4 1.696-2.872 2.72-5.08 2.72S5 16.064 5.176 14.392c.12-1.096.872-2.888 4.128-2.576 1.72.16 2.504.48 3.912.944.36-.664.664-1.4.888-2.176H7.88v-.616h3.072V8.864H7.2v-.68h3.752V6.592s.032-.248.312-.248H12.8v1.848h4v.68h-4v1.104h3.264a12.41 12.41 0 0 1-1.32 3.32c.51.182 2.097.676 4.76 1.483a8 8 0 1 0-1.096 2.012zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.568-5.632c1.44 0 2.824-.872 3.96-2.352-1.608-.776-2.944-1.16-4.44-1.16-1.304 0-1.984.8-2.104 1.416-.12.616.248 2.096 2.584 2.096z" />
    </svg>
  );
};

AlipayLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AlipayLineIcon = withWrapper(AlipayLineIconComponent);
export default AlipayLineIcon;
