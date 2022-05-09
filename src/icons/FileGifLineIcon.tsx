/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const FileGifLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m16 2 5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16zm-1 2H5v16h14V8h-4V4zm-2 6v5h-1v-5h1zm-2 0v1H9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1v-1H9v-1h2v2a1 1 0 0 1-1 1H9a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2zm6 0v1h-2v1h2v1h-2v2h-1v-5h3z" />
    </svg>
  );
};

FileGifLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FileGifLineIcon = withWrapper(FileGifLineIconComponent);
export default FileGifLineIcon;
