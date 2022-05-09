/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const CreativeCommonsLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM9 8c1.105 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 1 0-.001 2.828l1.414 1.413A4.001 4.001 0 0 1 5 12c0-2.208 1.792-4 4-4zm7 0c1.105 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 1 0-.001 2.828l1.414 1.413A4.001 4.001 0 0 1 12 12c0-2.208 1.792-4 4-4z" />
    </svg>
  );
};

CreativeCommonsLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CreativeCommonsLineIcon = withWrapper(CreativeCommonsLineIconComponent);
export default CreativeCommonsLineIcon;
