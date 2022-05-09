/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const FilePaperLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M17 17v2a1 1 0 0 0 2 0V4H5v11H3V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2h16z" />
    </svg>
  );
};

FilePaperLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FilePaperLineIcon = withWrapper(FilePaperLineIconComponent);
export default FilePaperLineIcon;
