/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Cake3FillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M15.5 2a3.5 3.5 0 0 1 3.437 4.163l-.015.066a4.502 4.502 0 0 1 .303 8.428l-1.086 6.507a1 1 0 0 1-.986.836H6.847a1 1 0 0 1-.986-.836l-1.029-6.17a3 3 0 0 1-.829-5.824L4 9a6 6 0 0 1 8.575-5.42A3.493 3.493 0 0 1 15.5 2zM11 15H9v5h2v-5zm4 0h-2v5h2v-5zm2.5-2a2.5 2.5 0 1 0-.956-4.81l-.175.081a2 2 0 0 1-2.663-.804l-.07-.137A4 4 0 0 0 10 5C7.858 5 6.109 6.684 6.005 8.767L6 8.964l.003.17a2 2 0 0 1-1.186 1.863l-.15.059A1.001 1.001 0 0 0 5 13h12.5z" />
    </svg>
  );
};

Cake3FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Cake3FillIcon = withWrapper(Cake3FillIconComponent);
export default Cake3FillIcon;
