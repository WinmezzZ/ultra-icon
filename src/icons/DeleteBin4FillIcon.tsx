/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const DeleteBin4FillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2h-2zm-9 3v7h2v-7h-2zM7 2h10v2H7V2z" />
    </svg>
  );
};

DeleteBin4FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DeleteBin4FillIcon = withWrapper(DeleteBin4FillIconComponent);
export default DeleteBin4FillIcon;
