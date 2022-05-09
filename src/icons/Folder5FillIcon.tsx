/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Folder5FillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M13.414 5H20a1 1 0 0 1 1 1v1H3V4a1 1 0 0 1 1-1h7.414l2 2zM3.087 9h17.826a1 1 0 0 1 .997 1.083l-.834 10a1 1 0 0 1-.996.917H3.92a1 1 0 0 1-.996-.917l-.834-10A1 1 0 0 1 3.087 9z" />
    </svg>
  );
};

Folder5FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Folder5FillIcon = withWrapper(Folder5FillIconComponent);
export default Folder5FillIcon;
