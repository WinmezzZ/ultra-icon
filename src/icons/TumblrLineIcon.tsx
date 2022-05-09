/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const TumblrLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M8 8c1.075 0 3.497-.673 3.497-4.5V2h1.5v6H18v2h-5.003v2.91C13 15.39 13 16.595 13 17c-.002 2.208 1.615 3.4 4.785 3.4V22h-2.242c-2.402.002-4.546-2.035-4.546-4.545V10H7V8h1z" />
    </svg>
  );
};

TumblrLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TumblrLineIcon = withWrapper(TumblrLineIconComponent);
export default TumblrLineIcon;
