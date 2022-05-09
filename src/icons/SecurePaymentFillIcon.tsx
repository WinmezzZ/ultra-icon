/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SecurePaymentFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m11 2 7.298 2.28a1 1 0 0 1 .702.955V7h2a1 1 0 0 1 1 1v2H9V8a1 1 0 0 1 1-1h7V5.97l-6-1.876L5 5.97v7.404a4 4 0 0 0 1.558 3.169l.189.136L11 19.58 14.782 17H10a1 1 0 0 1-1-1v-4h13v4a1 1 0 0 1-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L11 22l-5.38-3.668A6 6 0 0 1 3 13.374V5.235a1 1 0 0 1 .702-.954L11 2z" />
    </svg>
  );
};

SecurePaymentFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SecurePaymentFillIcon = withWrapper(SecurePaymentFillIconComponent);
export default SecurePaymentFillIcon;
