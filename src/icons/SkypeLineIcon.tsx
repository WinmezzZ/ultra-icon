/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SkypeLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M13.004 18.423a2 2 0 0 1 1.237.207 3.25 3.25 0 0 0 4.389-4.389 2 2 0 0 1-.207-1.237 6.5 6.5 0 0 0-7.427-7.427 2 2 0 0 1-1.237-.207A3.25 3.25 0 0 0 5.37 9.76a2 2 0 0 1 .207 1.237 6.5 6.5 0 0 0 7.427 7.427zM12 20.5a8.5 8.5 0 0 1-8.4-9.81 5.25 5.25 0 0 1 7.09-7.09 8.5 8.5 0 0 1 9.71 9.71 5.25 5.25 0 0 1-7.09 7.09c-.427.066-.865.1-1.31.1zm.053-3.5C9.25 17 8 15.62 8 14.586c0-.532.39-.902.928-.902 1.2 0 .887 1.725 3.125 1.725 1.143 0 1.776-.624 1.776-1.261 0-.384-.188-.808-.943-.996l-2.49-.623c-2.006-.504-2.37-1.592-2.37-2.612C8.026 7.797 10.018 7 11.89 7c1.72 0 3.756.956 3.756 2.228 0 .545-.48.863-1.012.863-1.023 0-.835-1.418-2.9-1.418-1.023 0-1.596.462-1.596 1.126 0 .663.803.876 1.502 1.035l1.836.409C15.49 11.695 16 12.876 16 13.989 16 15.713 14.675 17 12.015 17h.038z" />
    </svg>
  );
};

SkypeLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SkypeLineIcon = withWrapper(SkypeLineIconComponent);
export default SkypeLineIcon;
