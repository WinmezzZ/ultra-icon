/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const HeartAddLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M19 14v3h3v2h-3.001L19 22h-2l-.001-3H14v-2h3v-3h2zm1.243-9.243a6 6 0 0 1 .236 8.235l-1.42-1.418c1.331-1.524 1.261-3.914-.232-5.404a4.001 4.001 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a3.999 3.999 0 0 0-5.494.154 4 4 0 0 0-.192 5.451l8.432 8.446L12 21.485l-8.48-8.492A6 6 0 0 1 12 4.529a5.998 5.998 0 0 1 8.242.228z" />
    </svg>
  );
};

HeartAddLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HeartAddLineIcon = withWrapper(HeartAddLineIconComponent);
export default HeartAddLineIcon;
