/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const CreativeCommonsSaFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 4C9.895 6 8.094 7.56 7.357 9.77l-.073.23H6l2.5 3 2.5-3H9.401C9.92 8.805 10.89 8 12 8c1.657 0 3 1.79 3 4s-1.343 4-3 4c-1.048 0-1.971-.717-2.508-1.803L9.402 14H7.285c.685 2.33 2.538 4 4.715 4 2.761 0 5-2.686 5-6s-2.239-6-5-6z" />
    </svg>
  );
};

CreativeCommonsSaFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CreativeCommonsSaFillIcon = withWrapper(CreativeCommonsSaFillIconComponent);
export default CreativeCommonsSaFillIcon;
