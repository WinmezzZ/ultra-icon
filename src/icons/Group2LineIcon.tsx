/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Group2LineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M9.55 11.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5zm.45 8.248V16.4c0-.488.144-.937.404-1.338a6.473 6.473 0 0 0-5.033 1.417A8.012 8.012 0 0 0 10 19.749zM4.453 14.66A8.462 8.462 0 0 1 9.5 13c1.043 0 2.043.188 2.967.532.878-.343 1.925-.532 3.033-.532 1.66 0 3.185.424 4.206 1.156a8 8 0 1 0-15.253.504zm14.426 1.426C18.486 15.553 17.171 15 15.5 15c-2.006 0-3.5.797-3.5 1.4V20a7.996 7.996 0 0 0 6.88-3.914zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.5-9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </svg>
  );
};

Group2LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Group2LineIcon = withWrapper(Group2LineIconComponent);
export default Group2LineIcon;
