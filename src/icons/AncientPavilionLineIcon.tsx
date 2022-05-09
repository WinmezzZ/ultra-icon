/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const AncientPavilionLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12.513 2.001a9.004 9.004 0 0 0 9.97 5.877A4.501 4.501 0 0 1 19 11.888V19l2 .001v2H3v-2h2v-7.113a4.503 4.503 0 0 1-3.484-4.01 9.004 9.004 0 0 0 9.972-5.876h1.025zM17 12H7v7h10v-7zm-5-6.673-.11.155A11.012 11.012 0 0 1 5.4 9.736l-.358.073.673.19h12.573l.668-.19-.011-.002a11.01 11.01 0 0 1-6.836-4.326L12 5.326z" />
    </svg>
  );
};

AncientPavilionLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AncientPavilionLineIcon = withWrapper(AncientPavilionLineIconComponent);
export default AncientPavilionLineIcon;
